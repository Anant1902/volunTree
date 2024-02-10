import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { collection, addDoc } from 'firebase/firestore';
import { firebaseDB } from '../config/firebaseConfig';

const userCollectionRef = collection(firebaseDB, 'responses');

// Add a new document with a generated id.
const addResponseData = async (responseData) => {
  try {
    const docRef = await addDoc(userCollectionRef, responseData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

function FeedbackDetailScreen({ route, navigation }) {
  const { questions, title } = route.params.params;

  const [responses, setResponses] = useState(questions.map(() => 5));

  const handleSliderChange = (value, index) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const handleSubmit = () => {
    const averages = {
      Gracious: calculateAverage(responses.slice(0, 3)),
      Green: calculateAverage(responses.slice(3, 6)),
      Giving: calculateAverage(responses.slice(6, 9)),
      Grounded: calculateAverage(responses.slice(9, 12)),
      Grateful: calculateAverage(responses.slice(12, 15)),
    };
    console.log('Averages:', averages);
    addResponseData({
      user_id: 1,
      activity_id: 1,
      giving_avg: averages.Giving,
      gracious_avg: averages.Gracious,
      grateful_avg: averages.Grateful,
      green_avg: averages.Green,
      grounded_avg: averages.Grounded,
      completed: true,
      hours_spent: 5
    });
    // Placeholder for what to do next with averages
  };

  const calculateAverage = (values) => values.reduce((sum, val) => sum + val, 0) / values.length;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.activityName}>{title}</Text>
      {questions.map((question, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.question}>Q{question.id}: {question.text}</Text>
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>1</Text>
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={10}
              step={1}
              value={responses[index]}
              onValueChange={(value) => handleSliderChange(value, index)}
              minimumTrackTintColor="#1fb28a"
              maximumTrackTintColor="#d3d3d3"
              thumbTintColor="#b9e4c9"
            />
            <Text style={styles.sliderLabel}>10</Text>
          </View>
          <Text style={styles.valueText}>Value: {responses[index]}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  activityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slider: {
    flex: 1,
  },
  sliderLabel: {
    width: 30,
    textAlign: 'center',
  },
  valueText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
  submitButton: {
    backgroundColor: '#1fb28a', // Change as needed
    padding: 15,
    borderRadius: 25, // Adjust for roundness
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default FeedbackDetailScreen;
