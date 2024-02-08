import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens

import AttendanceScreen from './screens/AttendanceScreen';
import ImpactsScreen from './screens/ImpactsScreen';
import LogoutScreen from './screens/LogoutScreen';
import UserHomeScreen from './screens/UserHomeScreen'

// Screen names

const detailsName = "Details";
const settingsName = "Settings";
const surveysName = "Surveys";
const homeName = "Home";
const logoutName = "Logout";

const Tab = createBottomTabNavigator();

const MainContainerUser = () => {
  return (

      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === surveysName) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } 
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { fontSize: 10 },
          style: { padding: 10, height: 100 }
        }}
      >
        <Tab.Screen
          name={homeName}
          component={UserHomeScreen}
          options={{
            title: homeName,
            headerTitleContainerStyle: { marginTop: 0, marginBottom: 10 }, // Adjust the marginTop value
            headerTitleStyle: { fontSize: 16 } // Adjust the font size as needed
          }}
        />
        <Tab.Screen
          name={surveysName}
          component={AttendanceScreen}
          options={{
            title: surveysName,
            headerTitleContainerStyle: { marginTop: 0 }, // Adjust the marginTop value
            headerTitleStyle: { fontSize: 16 } // Adjust the font size as needed
          }}
        />
        
      </Tab.Navigator>

  );
}

export default MainContainerUser;