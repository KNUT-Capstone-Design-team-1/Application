import React from "react";
import { View, TouchableOpacity, Text, Image, FlatList } from "react-native";

import database, { get_all_pills, get_specific_pills } from "./database";

async function get_pills_info() {}

export default function PillStorage() {
  const storedPillList = get_all_pills();
  const storedPillName = storedPillList.map((tmp) => ({ name: tmp.name }));

  const renderPills = ({ item }) => <TouchableOpacity></TouchableOpacity>;

  return (
    <View style={{ flex: 1 }}>
      <FlatList />
    </View>
  );
}
