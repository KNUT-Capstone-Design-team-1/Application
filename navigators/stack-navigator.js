import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./tab-navigator";

const Stack = createNativeStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator screenOptions={{ presentation: "modal" }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="TabNavigator"
        component={Tabs}
      />
    </Stack.Navigator>
  );
}
