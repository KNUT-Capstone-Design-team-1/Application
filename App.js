import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TextInput,
  PermissionsAndroid,
  ToastAndroid,
} from "react-native";
import Stacks from "./navigators/stack-navigator";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.autoCorrect = false;
TextInput.defaultProps.allowFontScaling = false;

export default function App() {
  useEffect(() => {
    async function requestPermission() {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]).then((result) => {
        if (
          result["android.permission.CAMERA"] &&
          result["android.permission.WRITE_EXTERNAL_STORAGE"] &&
          result["android.permission.READ_EXTERNAL_STORAGE"] === "granted"
        ) {
          ToastAndroid.showWithGravity(
            "모든 권한 획득",
            ToastAndroid.LONG,
            ToastAndroid.CENTER
          );
        } else {
          ToastAndroid.showWithGravity(
            "권한 거절",
            ToastAndroid.LONG,
            ToastAndroid.CENTER
          );
        }
      });
    }
    requestPermission();
  }, []);

  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
