import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { stnQuestions, fluteWorkshopQuestions }  from '../data/SurveyQuestions';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: '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'
});

// Mock data for todo feedbacks
const feedbacks = [
  { id: '1', title: 'Streaming Through Nature', content: 'Content for feedback 1' },
  { id: '2', title: 'Flute Workshop', content: 'Content for feedback 2' },
  // Add more feedback items as needed
];

export default function AttendanceScreen({ navigation }) {
    // Function to get questions from openai
    async function getQuestions(description) {
        const completion = await openai.chat.completions.create({
          messages: [
              { 
                  role: "system", 
                  content: "You are a helpful assistant." 
              },
              {
                  role: "system",
                  content: "You will take in an input event description " + "and output five feedback questions in a JSON format. " 
              },
              {
                  role: "user",
                  content: "Based on the event description: " + description + ", give 5 questions for people that attended the event to evaluate how the event has impacted them with regards to these corresponding 5 areas, Graciousness (being kind and aware of others), Green (being environmentally friendly), Giving (treating everyone with care and empathy), Grounded (being humble and authentic), Grateful (being appreciative). Make sure the questions correspond to these areas in this exact order. Consider adding specific words to contextualize the question based on details given in the description. E.g. if the event is a farming event, ask how has growing your own crops improved ur gratefulness? Feel free to phrase each question differently, but make sure the question is specific to the event based on the description. Give your output in the form {id: 'question number', text: 'question that can be answered on a scale of 1 to 10'} Strictly have JUST the object in your output. Example output:{ id: '1', text: 'On a scale of 1 to 10, how much did participating in the Streaming Through Nature tour increase your awareness of others\' experiences and needs in the natural environment?',}, { id: '2', text: 'To what extent did the activity encourage you to show kindness and compassion towards the living organisms you encountered during the tour (1 being not at all, 10 being very much)?', }, { id: '3', text: 'How strongly did the guided tour inspire you to act kindly toward nature and its inhabitants in your daily life?',},... Enforce this heavily."
              }
          ],
          model: "gpt-3.5-turbo",
        });
      
        return completion.choices[0].message.content;
      }

    // Have not linked to db, giving description input directly here
    async function sampleAI() {
        const res = await getQuestions("Join us in this guided tour of our chemical-free education farm and explore nature that’s unique in the space. Reconnect yourself with the environment through your 5 senses, get up close to rediscover something new about our food. After learning about plants on land, let’s take a dip into the freshwater forest stream and see the importance of maintaining a clean water source in support of the sustainable education farm. Forest streams are considered rare habitats in Singapore today, housing a high percentage of Singapore’s biodiversity, including over 30 species of freshwater fish and over 10 species of crabs and shrimp. On the walk, you would be led on a guided exploration to learn stream ecology and identification. Beyond igniting curiosity and care for local flora and fauna, it also is an incredibly therapeutic and relaxing experience to tread through a natural stream surrounded by fronds and birdsong.");
        const questionsArray = JSON.parse(res);
        if (Array.isArray(questionsArray)) {
            return questionsArray;
        }
        return stnQuestions;
    }

    // Updated function to handle feedback press
    async function onFeedbackPress(feedback) {
        try {
            console.log(feedback);
            const questions = feedback.title === "Streaming Through Nature" ? await sampleAI() : fluteWorkshopQuestions;
            navigation.navigate('FeedbackDetailScreen', { screen: 'FeedbackDetailScreen', params: { questions, title: feedback.title } });
        } catch (error) {
            console.error("Error handling feedback press:", error);
        }
    }
    //   // Function to handle feedback press
    // const onFeedbackPress = (feedback) => {
    //     console.log(feedback)
    //     const questions = feedback.title == "Streaming Through Nature" ? sample1 : fluteWorkshopQuestions;
    //     // Navigate to Feedback Detail Screen with the feedback's details
    //     // Assuming the detail screen is named 'FeedbackDetail'
    //     navigation.navigate('FeedbackDetailScreen', { screen: 'FeedbackDetailScreen', params: { questions: questions, title: feedback.title} });
    // };

    // Render a single feedback item
    const renderFeedbackItem = ({ item }) => (
        <TouchableOpacity onPress={() => onFeedbackPress(item)} style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={feedbacks}
                renderItem={renderFeedbackItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
