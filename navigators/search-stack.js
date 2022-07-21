import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchImage from "../screens/search-image";
import SearchPill from "../screens/search-pill";
import CheckImage from "../screens/search-check";
import { theme } from "../colors";

const SearchStack = createNativeStackNavigator();

export default function SearchStacks() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        presentation: "modal",
        headerShown: false,
      }}
    >
      <SearchStack.Screen
        name="SearchPill"
        component={SearchPill}
        options={{}}
      />
      <SearchStack.Screen
        name="SearchImage"
        component={SearchImage}
        options={{}}
      />
      <SearchStack.Screen
        name="SearchCheck"
        component={CheckImage}
        options={{}}
      />
    </SearchStack.Navigator>
  );
}
