import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useMyNavigation } from "../hooks/useMyNavigation";

const NavigatingParagraph = ({ screen, Texts }) => {
  const navigateTo = useMyNavigation();
  return (
    <TouchableOpacity onPress={() => navigateTo(screen,)}>
      <Text style={styles.text}>{Texts}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "rgb(55, 113, 230)",
    fontSize: 20,
  },
});

export default NavigatingParagraph;
