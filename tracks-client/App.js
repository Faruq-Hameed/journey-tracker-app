import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Context, Provider } from "./src/contexts/tokenContext";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import AccountScreen from "./src/screens/AccountScreen";
import { useContext } from "react";

const LoginStack = createNativeStackNavigator();
const TrackStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();


const TrackStackNavigator = () => {
  return (
    <TrackStack.Navigator>
      <TrackStack.Screen name="Tracks" component={TrackListScreen} options={{title: "Tracks"}} />
      <TrackStack.Screen name="Detail" component={TrackDetailScreen} />
    </TrackStack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen
        name="TrackNavs"
        component={TrackStackNavigator}
        options={{ title: "TrackNavs", headerShown: false }}  /* Hide parent header to avoid title overlap */
      />
      <MainTab.Screen
        name="Create"
        component={TrackCreateScreen}
        options={{ title: "Create Track" }}
      />
      <MainTab.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: "Account" }}
      />
    </MainTab.Navigator>
  );
};

const AuthStackNavigator = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <LoginStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
    </LoginStack.Navigator>
  );
};

const Navigation = () => {
  const { state } = useContext(Context); //get the current state of the token
  if (state.token) {
    return (
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider>
      <Navigation />
    </Provider>
  );
}

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Tracks"
//         component={TrackListScreen}
//         options={{ title: "Tracks" }}
//       />
//       <Tab.Screen
//         name="Create"
//         component={TrackCreateScreen}
//         options={{ title: "Create Track" }}
//       />
//       <Tab.Screen
//         name="Account"
//         component={AccountScreen}
//         options={{ title: "Create Track" }}
//       />
//     </Tab.Navigator>
//   );
// }

// export default function  App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SignUp">
//         <Stack.Screen
//           name="SignUp"
//           component={SignUpScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="SignIn"
//           component={SignInScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="Tracks" component={TrackListScreen} options={{title: "Tracks"}}/>
//         <Stack.Screen name="Detail" component={TrackDetailScreen} options={{title: ""}} />
//         <Stack.Screen name="Tabs" component={MyTabs} options={{title: ""}} />
//         {/* <Stack.Screen name="Create" component={TrackCreateScreen} options={{title: "Create Track"}}/>
//         <Stack.Screen name="Account" component={AccountScreen} options={{title: "Create Track"}}/> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
