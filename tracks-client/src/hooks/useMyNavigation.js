import React from "react";
import { useNavigation } from "@react-navigation/native";
import NavigatingParagraph from "../components/NavigatingParagraph";

/**
 * @prop {string} - Screen
 * @prop {object} - params
*/
export const useMyNavigation = () => {
  const navigation = useNavigation();
 /**
   * Navigates to specified screen with option to replace current screen
   * @param {string} screen - Screen name to navigate to
   * @param {boolean} replace - Whether to replace current screen
   * @param {Object} params - Navigation parameters
   */
 const navigateTo = ({screen, resetStack = false, params ={}}) => {
   if (resetStack) {
     //then clears the navigation stack
     return navigation.reset({
       index: 0, // Current active screen position
       routes: [
         // Array of screens in the stack
         { name: screen, params }, // Single route configuration
       ],
     });
   }
   //else if the navigation is to push a new screen
   return navigation.navigate(screen, params);
 }; 

return navigateTo
}

