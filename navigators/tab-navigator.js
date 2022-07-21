import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchStacks from "./search-stack";
import NearbyStacks from "./nearby-stack";
import PillStorage from "../screens/my-pill-storage";
import { theme } from "../colors";
import { FontAwesome5 } from "@expo/vector-icons";

import PillInfo from "../screens/pill-info";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.selectBg },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name="searchPill"
        component={SearchStacks}
        options={{
          tabBarLabel: "검색",
          tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
          title: "의약품 식별 검색",
          tabBarIcon: ({ focused }) => {
            let color;
            color = focused ? theme.skyblue : "gray";
            return <FontAwesome5 name="search" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="nearby"
        component={NearbyStacks}
        options={{
          tabBarLabel: "지도",
          tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
          title: "내 주변 약국",
          tabBarIcon: ({ focused }) => {
            let color;
            color = focused ? theme.selectBg : "gray";
            return <FontAwesome5 name="map" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="pillStorage"
        component={PillStorage}
        options={{
          tabBarLabel: "내 알약",
          tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
          title: "알약 보관함",
          tabBarIcon: ({ focused }) => {
            let color;
            color = focused ? theme.selectBg : "gray";
            return <FontAwesome5 name="database" size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="test"
        component={PillInfo}
        options={{
          tabBarLabel: "테스트",
          tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
          title: "테스트",
          tabBarIcon: ({ focused }) => {
            let color;
            color = focused ? theme.selectBg : "gray";
            return <FontAwesome5 name="database" size={20} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
