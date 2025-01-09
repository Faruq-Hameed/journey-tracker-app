import React from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";

const ButtonComponent = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
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

export default ButtonComponent;
