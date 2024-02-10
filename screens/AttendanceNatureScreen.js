import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import NameSearchAndList from './NameSearchAndList';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firebaseDB } from '../config/firebaseConfig'; // Adjust the import path as necessary
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Button } from 'react-native';
import { submitResponse } from './SubmitResponses';


export default function AttendanceNatureScreen({ route, navigation }) {
  const [volunteers, setVolunteers] = useState([]);
  const [names, setNames] = useState([]);

  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const { title } = route.params

  const handleCreateResponses = () => {
    // Pass the volunteer names and the activity title to the submitResponse function
    submitResponse(volunteers, title, firebaseDB);
  };

  useEffect(() => {
    const fetchVolunteers = async () => {
      const q = query(collection(firebaseDB, 'users'), where('type', '==', 'volunteer'));
      try {
        const querySnapshot = await getDocs(q);
        const volunteers = querySnapshot.docs.map(doc => doc.data()); // Assuming 'name' is the field you want to display
        const names = volunteers.map(volunteer => volunteer.name);
        setVolunteers(volunteers);
        setNames(names);
      } catch (error) {
        console.error("Error fetching volunteer names:", error);
        // Optionally handle the error, e.g., by showing an error message
      }
      setLoading(false);
    };

    fetchVolunteers();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
    <Text style={{ fontSize: 24, textAlign: 'center', marginVertical: 20 }}>
      {title}
    </Text>
      <NameSearchAndList data={names} userEmail={user.email} activityName={title} />
      <Button
        title="Submit"
        onPress={handleCreateResponses}
        color="#0000FF"
      />
    </View>
  );
};