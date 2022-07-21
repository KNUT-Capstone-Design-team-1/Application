import React from "react";

import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../colors";
import { getCamera, getGallery } from "./search-image";

export default function CheckImage({ navigation, route }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 6,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            height: "100%",
            width: "100%",
            resizeMode: "contain",
          }}
          source={{ uri: route.params.img_uri }}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnItem}
          onPress={() => getGallery(navigation)}
        >
          <Ionicons
            name="images-outline"
            size={28}
            color={theme.selectLine}
            style={{ marginRight: 10 }}
          />
          <Text style={styles.btnText}>재선택</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnItem}
          onPress={() => getCamera(navigation)}
        >
          <Ionicons
            name="camera-outline"
            size={28}
            color={theme.selectLine}
            style={{ marginRight: 10 }}
          />
          <Text style={styles.btnText}>재촬영</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnItem}>
          <Ionicons
            name="search"
            size={28}
            color={theme.selectLine}
            style={{ marginRight: 10 }}
          />
          <Text style={styles.btnText}>검색</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  btnItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: theme.defaultLine,
    borderRadius: 15,
  },
  btnText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
