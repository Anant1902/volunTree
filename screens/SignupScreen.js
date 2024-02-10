import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Button,
  Keyboard,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { firebaseAuth } from "../config/firebaseConfig";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { KeyboardAvoidingView } from "react-native";
import { collection, addDoc } from 'firebase/firestore';
import { firebaseDB } from "../config/firebaseConfig";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [displayName, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const auth = firebaseAuth;
  const userCollectionRef = collection(firebaseDB, 'users');

  const addUserData = async (userData) => {
    try {
      const docRef = await addDoc(userCollectionRef, userData);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(response.user, {
        displayName: displayName
      });
       addUserData({
        email: email,
        name: displayName,
        type: 'volunteer',
        volunteer_hours: 0
      });
    } catch (e) {
      console.error(e);
      alert("Sign up failed: " + e.message);
    }
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView behaviour="padding" style={styles.container}>
      <TextInput
        style={styles.input}
        value={displayName}
        placeholder="Name"
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Email"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Password"
        onChangeText={setPassword}
      />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Submit" onPress={signUp} color={"#000000"} />
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    margin: 10,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});

export default SignupScreen;
