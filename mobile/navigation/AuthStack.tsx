import React, { ReactElement } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../components/Landing";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const Stack = createStackNavigator();

export default function AuthStack(): ReactElement {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Landing"
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
