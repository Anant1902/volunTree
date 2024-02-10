import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Button,
  Keyboard,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { firebaseAuth } from "../config/firebaseConfig";
import { TextInput } from "react-native-gesture-handler";
import { useHeaderHeight } from "@react-navigation/elements";

import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const auth = firebaseAuth;
  const height = useHeaderHeight();

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
    <KeyboardAvoidingView
      keyboardVerticalOffset={height + 10}
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.container}
    >
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.name}>volunTree</Text>
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
          <TouchableOpacity onPress={signIn} style={styles.button}>
            <Text>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={styles.button}
          >
            <Text>No account?</Text>
          </TouchableOpacity>
        </>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  name: {
    fontSize: 40,
    textAlign: "center",
    marginVertical: 10,
  },
  input: {
    margin: 10,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: "90%",
    alignSelf: "center",
  },
  button: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#b1f3b1",
    padding: 10,
    width: "60%",
    borderRadius: 20,
    marginVertical: 10,
  },
  submitButtonText: {
    color: "white",
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 50,
  },
});

export default LoginScreen;
