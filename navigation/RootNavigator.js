import * as React from "react";
import { useEffect, useState, useContext } from "react";
import { View, ActivityIndicator } from 'react-native';
import AdminTab from "./AdminTab";
import UserTab from "./UserTab";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { AuthContext } from "../providers/AuthProvider";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firebaseDB } from "../config/firebaseConfig";

export const RootNavigator = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserByEmail = async (userEmail) => {
      const usersRef = collection(firebaseDB, 'users');
      const q = query(usersRef, where("email", "==", userEmail));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        // Assuming we have a unique user for each email
        setUserData(querySnapshot.docs[0].data());
      } else {
        console.log("No matching documents.");
      }
      setLoading(false);
    };

    if (user) {
      getUserByEmail(user.email);
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {!user || !userData ? (
        <AuthStack />
      ) : userData.type === "admin" ? (
        <AdminTab />
      ) : (
        <UserTab />
      )}
    </NavigationContainer>
  );
};
