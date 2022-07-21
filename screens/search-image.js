import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../colors";
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
} from "expo-image-picker";

export async function getCamera(navigation) {
  const options = {
    allowsEditing: true,
    aspect: [4, 3],
    base64: true,
    quality: 1,
  };
  let camResult = await launchCameraAsync(options);

  if (!camResult.cancelled) {
    navigation.replace("SearchCheck", {
      img_uri: camResult.uri,
      img_base64: camResult.base64,
    });
  }
}

export async function getGallery(navigation) {
  const options = {
    mediaTypes: MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    base64: true,
    quality: 1,
  };

  let result = await launchImageLibraryAsync(options);

  if (!result.cancelled) {
    navigation.replace("SearchCheck", {
      img_uri: result.uri,
      img_base64: result.base64,
    });
  }
}

export default function SearchImage({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>이렇게 찍어주세요</Text>
      </View>
      <View style={{ flex: 9 }}>
        <View
          style={{ flex: 3, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            style={{
              height: "90%",
              width: "90%",
              resizeMode: "contain",
            }}
            source={require("../assets/search/defaultimage.jpg")}
          />
        </View>
        <View>
          <View style={styles.contentView}>
            <Text style={styles.content}>
              ㆍ 알약의 글자가 잘보이게 찍어주세요
            </Text>
            <Text style={styles.content}>
              ㆍ 글자가 수평으로 보이게 찍어주세요
            </Text>
            <Text style={styles.content}>
              ㆍ 알약은 하나씩 올려서 찍어주세요
            </Text>
          </View>
        </View>
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
          <Text style={styles.btnText}>갤러리</Text>
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
          <Text style={styles.btnText}>카메라</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topText: {
    fontSize: 26,
    fontWeight: "bold",
  },
  contentView: {
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 10,
  },
  content: {
    fontSize: 18,
    fontWeight: "bold",
  },
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
