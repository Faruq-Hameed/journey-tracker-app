import React from "react";
import { useNavigation } from "@react-navigation/native";
import NavigatingParagraph from "../components/NavigatingParagraph";

/**
 * @prop {string} - Screen
 * @prop {object} - params
*/
export const useMyNavigation = (screen, params) => {
  const navigation = useNavigation();
  return navigation.navigate(screen, params);
}

