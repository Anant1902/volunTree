import * as React from 'react';
import MainContainerAdmin from '../navigation/MainContainerAdmin';
import MainContainerUser from '../navigation/MainContainerUser';
import Onboarding from '../components/Onboarding';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';



export default function App() {
  const page = "admin";
  return page === "admin" ? <MainContainerAdmin /> : <MainContainerUser />;
  
}
