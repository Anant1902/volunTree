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

import { createUserWithEmailAndPassword } from "firebase/auth";
import { KeyboardAvoidingView } from "react-native";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const auth = firebaseAuth;

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
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
