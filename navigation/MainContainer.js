import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

// Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (

      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';
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
          component={HomeScreen}
          options={{
            title: homeName,
            headerTitleContainerStyle: { marginTop: 0 }, // Adjust the marginTop value
            headerTitleStyle: { fontSize: 16 } // Adjust the font size as needed
          }}
        />
        <Tab.Screen
          name={detailsName}
          component={DetailsScreen}
          options={{
            title: detailsName,
            headerTitleContainerStyle: { marginTop: 0 }, // Adjust the marginTop value
            headerTitleStyle: { fontSize: 16 } // Adjust the font size as needed
          }}
        />
        <Tab.Screen
          name={settingsName}
          component={SettingsScreen}
          options={{
            title: settingsName,
            headerTitleContainerStyle: { marginTop: 0 }, // Adjust the marginTop value
            headerTitleStyle: { fontSize: 16 } // Adjust the font size as needed
          }}
        />
      </Tab.Navigator>

  );
}

export default MainContainer;
