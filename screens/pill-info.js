import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

export default function PillInfo() {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        flexDirection: "column",
        // justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>제목</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Image
          style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          source={require("../assets/search/testimage.jpg")}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text>효능 및 효과</Text>
        <Text>기능성소화불량으로 인한 소화기증상(속쓰림, 구역, 구토)</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>용법 및 용량</Text>
        <Text>
          성인: 모사프리드시트르산염무수물로서 1일 15 mg을 1일 1회 경구투여한다.
          이 약은 식사를 피하여 공복 상태에서 복용한다.(사용상의 주의사항 중 '3.
          일반적 주의 항 2) 항' 참조) 이 약은 서방성 제제이므로 부수거나,
          분쇄하거나 또는 씹어서 복용해서는 안되며, 정제 전체를 삼켜서 복용한다.
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>주의사항</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>복약정보</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text>제조사</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
