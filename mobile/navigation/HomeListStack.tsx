import React, { ReactElement } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import HomeList from "../components/Home/HomeList";
import Room from "../components/chat/Room";
import Profile from "../components/Profile/Profile";

const Stack = createStackNavigator();

export default function AuthStack(): ReactElement {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="List"
    >
      <Stack.Screen name="List" component={HomeList} />
      <Stack.Screen name="Room" component={Room} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
