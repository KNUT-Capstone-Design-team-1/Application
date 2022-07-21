import React from "react";
import { WebView } from "react-native-webview";
import { View } from "react-native";

export default function DrugStoreInfo({ route }) {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        style={{ height: "100%", width: "100%" }}
        source={{ uri: route.params.drugStoreUri }}
        useWebKit={true}
      />
    </View>
  );
}
