// FeedbackDetailNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AttendanceScreen from './AttendanceScreen';
import AttendanceNatureScreen from './AttendanceNatureScreen';

const Stack = createStackNavigator();

export default function AttendanceNavigator() {
  return (
    <Stack.Navigator screenOptions={({ route }) => ({headerShown: false,})} initialRouteName="AttendanceScreen">
      <Stack.Screen name="AttendanceScreen" component={AttendanceScreen} options={{ title: 'Feedback' }} />
      <Stack.Screen name="AttendanceNatureScreen" component={AttendanceNatureScreen} options={{ title: 'Nature' }} />
    </Stack.Navigator>
  );
}