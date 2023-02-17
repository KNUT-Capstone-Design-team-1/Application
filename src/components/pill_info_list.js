import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  FlatList,
  Image,
} from 'react-native';
import * as Api from '../api';

const Header = props => {
  const {style} = props;

  return (
    <SafeAreaView style={style}>
      <Text style={styles.text}>알약 검색</Text>
    </SafeAreaView>
  );
};

const PillInfoButtonList = props => {
  const {navigation, pillInfoList, recogResult} = props;
  const limit = 20;

  const [outputList, setOutputList] = useState(pillInfoList);
  const [skip, setSkip] = useState(20);
  const [scrollFlag, setScrollFlag] = useState(true);

  // 알약 개요정보 버튼 목록 <스크롤>
  const renderList = ({item}) => (
    <SafeAreaView style={styles.flat}>
      <TouchableOpacity
        style={styles.list}
        onPress={() => {
          navigation.navigate('pillInformation', {
            pillDetail: item,
            isManaging: false,
          });
        }}>
        <Image style={styles.pillImage} source={{uri: item.ITEM_IMAGE}} />
        <Text style={styles.pillName}>{item.ITEM_NAME}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  return (
    <FlatList
      data={outputList}
      renderItem={renderList}
      keyExtractor={(item, index) => index.toString()}
      onEndReached={async () => {
        setScrollFlag(false);
        const result = await Api.PillSearchApi.requestRecognitionSearch(
          recogResult,
          skip,
          limit,
        );

        setOutputList([...outputList, ...result]);
        setScrollFlag(true);
        setSkip(skip + limit);
      }}
      scrollEnabled={scrollFlag}
      onEndReachedThreshold={1}
    />
  );
};

const styles = StyleSheet.create({
  opacity: {
    height: '20%',
    width: '92%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2%',
  },
  button: {
    height: '100%',
    width: '100%',
    margin: '2%',
  },
  text: {
    color: 'white',
    fontSize: RFValue(30, 720),
    fontFamily: 'Jua-Regular',
  },
  flat: {
    flex: 1,
    margin: '4%',
    backgroundColor: '#BDECB6',
    borderRadius: RFValue(8, 720),
  },
  list: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: '5%',
    paddingBottom: '5%',
    borderRadius: RFValue(8, 720),
  },
  pillImage: {
    height: '100%',
    width: '30%',
    resizeMode: 'stretch',
  },
  pillName: {
    color: 'black',
    flexShrink: 1,
    fontSize: RFValue(25, 720),
    fontFamily: 'Jua-Regular',
  },
});

export {Header, PillInfoButtonList};
