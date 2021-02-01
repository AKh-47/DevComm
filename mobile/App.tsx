import React from "react";
import Theme from "./Theme";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
} from "@expo-google-fonts/roboto";

import { NavigationContainer } from "@react-navigation/native";
import Loading from "./components/Loading";
import Router from "./navigation/Router";
import AuthProvider from "./context/AuthContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <NavigationContainer>
        <AuthProvider>
          <Theme>
            <Router />
          </Theme>
        </AuthProvider>
      </NavigationContainer>
    </React.Fragment>
  );
}
