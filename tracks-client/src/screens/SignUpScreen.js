import react, { useReducer } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import TextBox from "../components/TextBox";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigatingParagraph from "../components/NavigatingParagraph";
import ButtonComponent from "../components/ButtonComponent";
import { signUpReducer } from "../reducers/signUpReducer";

const initialState = {
  firstname: "",
  lastname: "",
  phonenumber: "",
  email: "",
  password: "",
};
const SignUpScreen = () => {
  const [state, dispatch] = useReducer(signUpReducer, initialState);
  const { firstname, lastname, phonenumber, email, password } = state;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sign Up for Tracker</Text>
      <TextBox
        label="Enter Firstname"
        value={firstname}
        onChangeText={(texts) => {
          dispatch({ type: "firstname", payload: texts });
        }}
      />
      <TextBox
        label="Enter Lastname"
        value={lastname}
        onChangeText={(texts) => {
          dispatch({ type: "lastname", payload: texts });
        }}
      />
      <TextBox
        label="Enter Phone"
        value={phonenumber}
        onChangeText={(texts) => {
          dispatch({ type: "phonenumber", payload: texts });
        }}
      />
      <TextBox
        label="Enter Email"
        value={email}
        onChangeText={(texts) => {
          dispatch({ type: "email", payload: texts });
        }}
      />
      <TextBox
        label="Enter Password"
        value={password}
        onChangeText={(texts) => {
          dispatch({ type: "password", payload: texts });
        }}
        secureTextEntry={true}
      />
      <ButtonComponent
        title="Sign Up"
        onPress={() => {
          Alert.alert("Sign Up", JSON.stringify(state));
          // console.log("Sign Up", { data: state });
        }}
      />
      <NavigatingParagraph
        screen="SignIn"
        Texts="Already have an account? Sign In instead."
      />
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

export default SignUpScreen;
