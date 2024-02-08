// FeedbackDetailNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FeedbackDetailScreen from './FeedbackDetailScreen';
import FeedbackScreen from './FeedbackScreen';

const Stack = createStackNavigator();

export default function FeedbackDetailNavigator() {
  return (
    <Stack.Navigator screenOptions={({ route }) => ({headerShown: false,})} initialRouteName="FeedbackScreen">
      <Stack.Screen name="FeedbackDetailScreen" component={FeedbackDetailScreen} options={{ title: 'Survey Screen' }} />
      <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} options={{ title: 'Feedback' }} />
    </Stack.Navigator>
  );
}