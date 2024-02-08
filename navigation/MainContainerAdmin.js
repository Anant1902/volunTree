import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens


import AttendanceScreen from './screens/AttendanceScreen';
import ImpactsScreen from './screens/ImpactsScreen';
import LogoutScreen from './screens/LogoutScreen';

// Screen names

const detailsName = "Details";
const settingsName = "Settings";
const attendanceName = "Attendance";
const impactsName = "Impacts";
const logoutName = "Logout";

const Tab = createBottomTabNavigator();

const MainContainerAdmin = () => {
  return (

      <Tab.Navigator
        initialRouteName={impactsName}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === attendanceName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === impactsName) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === logoutName) {
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
          name={impactsName}
          component={ImpactsScreen}
          options={{
            title: impactsName,
            headerTitleContainerStyle: { marginTop: 0 }, // Adjust the marginTop value
            headerTitleStyle: { fontSize: 16 } // Adjust the font size as needed
          }}
        />
        <Tab.Screen
          name={attendanceName}
          component={AttendanceScreen}
          options={{
            title: attendanceName,
            headerTitleContainerStyle: { marginTop: 0 }, // Adjust the marginTop value
            headerTitleStyle: { fontSize: 16 } // Adjust the font size as needed
          }}
        />
        
        <Tab.Screen
          name={logoutName}
          component={LogoutScreen}
          options={{
            title: logoutName,
            headerTitleContainerStyle: { marginTop: 0 }, // Adjust the marginTop value
            headerTitleStyle: { fontSize: 16 } // Adjust the font size as needed
          }}
        />
      </Tab.Navigator>

  );
}

export default MainContainerAdmin;
