import React, { useState, createContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../config/firebaseConfig";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firebaseDB } from "../config/firebaseConfig";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (firebaseUser) => {
      if (firebaseUser) {
        // Use the email to query for additional user data in Firestore
        const usersRef = collection(firebaseDB, 'users');
        const q = query(usersRef, where("email", "==", firebaseUser.email));

        getDocs(q).then(querySnapshot => {
          if (!querySnapshot.empty) {
            // Assuming each email will have at most one associated user document
            const additionalData = querySnapshot.docs[0].data();
            // Combine the Firebase Auth user object with the extra user info from Firestore
            const combinedUser = {
              ...firebaseUser,
              ...additionalData,
            };
            setUser(combinedUser);
          } else {
            // If there's no additional data, just use the Auth user info
            setUser(firebaseUser);
          }
          setLoading(false);
        }).catch(error => {
          console.error("Error fetching extra user data: ", error);
          setLoading(false);
        });
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
