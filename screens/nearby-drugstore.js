import * as Location from "expo-location";
import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const { width, height } = Dimensions.get("screen");
const latitudeDelta = 0.00922;
const longitudeDelta = latitudeDelta * (width / height);

export default function Nearby({ navigation }) {
  const [googleMap, setGoogleMap] = useState(false);
  const [googleMarker, setGoogleMarker] = useState(false);
  let mapRef = useRef();
  const location = useRef({ lat: null, lon: null });

  const getMapCenter = async () => {
    try {
      let {
        center: { latitude, longitude },
      } = await mapRef.getCamera();
      location.current.lat = latitude;
      location.current.lon = longitude;
      getDrugStore();
    } catch (e) {}
  };

  const getDrugStore = async () => {
    try {
      let response = await fetch(
        "https://dapi.kakao.com/v2/local/search/category.json?category_group_code=PM9&radius=500&x=" +
          location.current.lon +
          "&y=" +
          location.current.lat +
          "&input_coord=WGS84",
        {
          headers: {
            Authorization: "KakaoAK 33a8b02db1a0de6d37b4d7de43955e46",
          },
        }
      );
      const place = await response.json();
      const result = place.documents.map((res) => ({
        name: res.place_name,
        url: res.place_url,
        lon: res.x,
        lat: res.y,
      }));
      setGoogleMarker(result);
    } catch (e) {}
  };

  useFocusEffect(
    useCallback(() => {
      const getLocation = async () => {
        try {
          let { status } = await Location.requestForegroundPermissionsAsync();
          let {
            coords: { latitude, longitude },
          } = await Location.getCurrentPositionAsync({
            accuracy: 5,
          });
          location.current.lat = latitude;
          location.current.lon = longitude;
          getDrugStore();
          setGoogleMap(true);
        } catch (error) {
          console.log(error);
        }
      };

      getLocation();
    }, [])
  );

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {googleMap ? (
        <MapView
          style={{ ...StyleSheet.absoluteFillObject, flex: 1 }}
          provider={PROVIDER_GOOGLE}
          ref={(ref) => (mapRef = ref)}
          initialRegion={{
            latitude: location.current.lat,
            longitude: location.current.lon,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          {googleMarker
            ? googleMarker.map((marker, index) => {
                return (
                  <Marker
                    key={index}
                    coordinate={{
                      latitude: Number(marker.lat),
                      longitude: Number(marker.lon),
                    }}
                    title={marker.name}
                    onPress={() =>
                      navigation.navigate("DrugStoreInfo", {
                        drugStoreUri: marker.url,
                      })
                    }
                  />
                );
              })
            : null}
        </MapView>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>위치를 찾을 수 없습니다.</Text>
        </View>
      )}
      <TouchableOpacity
        style={{ position: "absolute", backgroundColor: "white", bottom: 50 }}
        onPress={getMapCenter}
      >
        <Text>주변 약국 재검색</Text>
      </TouchableOpacity>
    </View>
  );
}
