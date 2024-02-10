import React, { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Button, KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Picker } from '@react-native-picker/picker';
import { firebaseAuth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from 'firebase/firestore';
import { firebaseDB } from "../config/firebaseConfig";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [displayName, setName] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("volunteer");
  const [loading, setLoading] = useState(false);

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
        type: accountType,
        volunteer_hours: 0
      });
      // Navigate to the login screen or home screen after successful signup
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
        secureTextEntry // to hide password input
      />
      <Text style={styles.label}>Account Type:</Text>
      <View style={styles.pickerContainer}></View>
      <Picker
        selectedValue={accountType}
        onValueChange={(itemValue, itemIndex) => setAccountType(itemValue)}
      >
        <Picker.Item label="Volunteer" value="volunteer" />
        <Picker.Item label="Admin" value="admin" />
      </Picker>

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
    padding: 20,
  },
  input: {
    marginVertical: 10,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  label: {
    fontSize: 16,
    color: '#000',
    paddingLeft: 10,
    marginTop: 20,
    marginBottom: 5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default SignupScreen;
