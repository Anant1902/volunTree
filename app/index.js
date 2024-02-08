import * as React from 'react';
import MainContainerAdmin from '../navigation/MainContainerAdmin';
import MainContainerUser from '../navigation/MainContainerUser';
import FeedbackDetail from '../navigation/screens/FeedbackDetailScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export default function App() {

  const page = "admi";
  return (
    page === "admin" ? <MainContainerAdmin /> : <MainContainerUser />
  ) 
  
}
