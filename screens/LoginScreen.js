import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Button,
  Keyboard,
} from "react-native";
import React from "react";
import { firebaseAuth } from "../config/firebaseConfig";
import { TextInput } from "react-native-gesture-handler";

import { signInWithEmailAndPassword } from "firebase/auth";
import { KeyboardAvoidingView, Image } from "react-native";
import logo from "../assets/logo.svg";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const auth = firebaseAuth;

  const signIn = async () => {
    
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (e) {
      console.error(e);
      alert("Sign in failed: " + e.message);
    }
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView behaviour="padding" style={styles.container}>
      <Image source={logo} style={{ width: 200, height: 200 }} />
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
        <>
          <Button title="Submit" onPress={signIn} color={"#000000"} />
          <Button
            title="No account? Create one here"
            onPress={() => navigation.navigate("Signup")}
            color={"#000000"}
          />
        </>
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

export default LoginScreen;
