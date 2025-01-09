import React, { useReducer, useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
import TextBox from "../components/TextBox";
import NavigatingParagraph from "../components/NavigatingParagraph";
import ButtonComponent from "../components/ButtonComponent";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sign In for Tracker</Text>
      <TextBox label="Enter Email" value={email} onChangeText={setEmail} />
      <TextBox
        label="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <ButtonComponent title="Sign In" onPress={() => {}} />

      <NavigatingParagraph
        screen="SignUp"
        Texts="Don't have an account? Go back to Sign Up instead."
      />

      {/* </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    padding: 10,
    paddingTop: 20,
  },
  header: {
    marginBottom: 25,
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default SignInScreen;
