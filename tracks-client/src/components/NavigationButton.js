import React from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useMyNavigation } from "../hooks/useMyNavigation";

//NavigationButton component it expect the button title and the screen to navigate to
const NavigationButton = ({ title, screen }) => {
  const navigation = useMyNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation(screen,true)} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(192, 207, 236)",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
  },
});

export default NavigationButton;
