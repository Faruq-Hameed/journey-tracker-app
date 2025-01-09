import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const NavigatingParagraph = ({ screen, Texts }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
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
