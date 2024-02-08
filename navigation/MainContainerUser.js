import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens


import SettingScreen from './screens/SettingScreen';
import ImpactsScreen from './screens/ImpactsScreen';
import LogoutScreen from './screens/SettingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import FeedbackDetail from './screens/FeedbackDetailScreen';
import FeedbackNavigator from './screens/FeedbackNavigator';

// Screen names

const detailsName = "Details";
const settingsName = "Settings";
const feedbackName = "Feedback";
const homeName = "Home";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const MainContainerUser = () => {
  return (
      // <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          // headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === feedbackName) {
              iconName = focused ? 'happy' : 'happy-outline';
            } else if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
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
          component={ImpactsScreen}
          options={{
            title: homeName,
            headerTitleContainerStyle: { marginTop: 0 }, // Adjust the marginTop value
            headerTitleStyle: { fontSize: 16 } // Adjust the font size as needed
          }}
        />
        <Tab.Screen
          name={feedbackName}
          component={FeedbackNavigator}
          options={{
            title: "Surveys to Complete",
            headerTitleContainerStyle: { marginTop: 0 }, // Adjust the marginTop value
            headerTitleStyle: { fontSize: 16 } // Adjust the font size as needed
          }}
        />
        <Tab.Screen
          name={settingsName}
          component={SettingScreen}
          options={{
            title: settingsName,
            headerTitleContainerStyle: { marginTop: 0 }, // Adjust the marginTop value
            headerTitleStyle: { fontSize: 16 } // Adjust the font size as needed
          }}
        />
      </Tab.Navigator>
  );
}

export default MainContainerUser;