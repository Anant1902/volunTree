import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firebaseDB } from '../config/firebaseConfig';
import { AuthContext } from '../providers/AuthProvider';
import { fluteWorkshopQuestions, stnQuestions } from '../data/SurveyQuestions';

export default function AttendanceScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      if (user) {
        const responsesRef = collection(firebaseDB, 'responses');
        const q = query(
          responsesRef,
          where('user_email', '==', user.email),
          where('completed', '==', false)
        );

        try {
          const querySnapshot = await getDocs(q);
          const fetchedFeedbacks = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().activity_name,
            // You can add other fields you may need from the response
          }));
          setFeedbacks(fetchedFeedbacks);
        } catch (error) {
          console.error("Error fetching feedbacks:", error);
        }
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, [user]);

  const onFeedbackPress = (feedback) => {
    try {
        console.log(feedback);
        const questions = feedback.title === "Streaming Through Nature" ? stnQuestions : fluteWorkshopQuestions;
        navigation.navigate('FeedbackDetailScreen', { screen: 'FeedbackDetailScreen', params: { questions, title: feedback.title } });
    } catch (error) {
        console.error("Error handling feedback press:", error);
    }
  };

  const renderFeedbackItem = ({ item }) => (
    <TouchableOpacity onPress={() => onFeedbackPress(item)} style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text style={{ fontSize: 18 }}>{item.title}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

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
