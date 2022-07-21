import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import drugsInfo from "./searchPillInfo.json";
import { theme } from "../colors";

const Item = ({ item, onPress, bgColor, borderColor, textBgColor }) => {
  const textColor = textBgColor ? "white" : "black";
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.searchItem, bgColor, borderColor]}
    >
      <Text
        style={{
          ...styles.searchTextItem,
          backgroundColor: textBgColor,
          color: textColor,
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default function SearchPill({ navigation }) {
  const [inputIden, setInputIden] = useState();
  const [selectForm, setSelectForm] = useState();
  const [selectShape, setSelectShape] = useState();
  const [selectColor, setSelectColor] = useState();
  const [selectScore, setSelectScore] = useState("no_scored");

  const idenChange = (input) => setInputIden(input);

  const RenderItem = ({ item, selectInfo, setSelectInfo }) => {
    const backgroundColor = item.id === selectInfo ? theme.selectBg : "white";
    const borderColor =
      item.id === selectInfo ? theme.selectLine : theme.defaultLine;

    return (
      <Item
        item={item}
        onPress={() => setSelectInfo(item.id)}
        bgColor={{ backgroundColor }}
        borderColor={{ borderColor }}
        textBgColor={item.color}
      />
    );
  };

  const FlatItem = ({
    drugsData,
    subTitle,
    selectState,
    selectSet,
    numColumns,
  }) => {
    return (
      <View style={styles.searchItemContatiner}>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <FlatList
          data={drugsData}
          numColumns={numColumns}
          renderItem={({ item }) => (
            <RenderItem
              item={item}
              selectInfo={selectState}
              setSelectInfo={selectSet}
            />
          )}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.searchContainer}>
        <View style={{ ...styles.searchItemContatiner }}>
          <Text style={styles.subTitle}>식별표시</Text>
          <TextInput
            onChangeText={idenChange}
            value={inputIden}
            style={styles.inputText}
          ></TextInput>
        </View>
        <FlatItem
          drugsData={drugsInfo.drugs_forms.items}
          subTitle={drugsInfo.drugs_forms.name}
          selectState={selectForm}
          selectSet={setSelectForm}
          numColumns={5}
        />
        <FlatItem
          drugsData={drugsInfo.drugs_shape.items}
          subTitle={drugsInfo.drugs_shape.name}
          selectState={selectShape}
          selectSet={setSelectShape}
          numColumns={6}
        />
        <FlatItem
          drugsData={drugsInfo.drugs_colors.items}
          subTitle={drugsInfo.drugs_colors.name}
          selectState={selectColor}
          selectSet={setSelectColor}
          numColumns={8}
        />
        <FlatItem
          drugsData={drugsInfo.drugs_score.items}
          subTitle={drugsInfo.drugs_score.name}
          selectState={selectScore}
          selectSet={setSelectScore}
          numColumns={5}
        />
      </View>
      <View style={styles.btnContatiner}>
        <TouchableOpacity style={styles.btnItem}>
          <Text style={styles.btnItemText}>초기화</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnItem}>
          <Text style={styles.btnItemText}>검색</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnItem}
          onPress={() => navigation.navigate("SearchImage")}
        >
          <Text style={styles.btnItemText}>이미지검색</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  searchContainer: {
    flex: 8,
    justifyContent: "space-between",
    marginVertical: 15,
    marginHorizontal: 15,
  },
  searchItemContatiner: {
    paddingVertical: 5,
    borderTopWidth: 1,
    borderStyle: "dashed",
    borderColor: theme.selectLine,
  },
  subTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: theme.selectLine,
  },
  inputText: {
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: theme.defaultLine,
  },
  searchItem: {
    marginHorizontal: 2,
    marginVertical: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 14,
    borderWidth: 1,
  },
  searchTextItem: {
    borderRadius: 5,
    fontSize: 16,
  },
  btnContatiner: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 5,
    borderTopColor: theme.selectLine,
    borderTopWidth: 3,
  },
  btnItem: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: theme.defaultLine,
    borderRadius: 20,
  },
  btnItemText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
