import * as React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  FlatList,
} from 'react-native';

const Header = props => {
  const {style} = props;

  return (
    <SafeAreaView style={style}>
      <Text style={styles.text}>알약 검색</Text>
    </SafeAreaView>
  );
};

const PillInfoButtonList = props => {
  const {navigation, PillInfoList} = props;

  // 알약 개요정보 버튼 목록 <스크롤>
  const renderList = ({item}) => (
    <SafeAreaView style={styles.flat}>
      <TouchableOpacity
        style={styles.list}
        onPress={() => {
          navigation.navigate('pillInformation', {
            PillDetail: item,
            isManaging: false,
          });
        }}>
        <Text style={styles.pillName}>{item.ITEM_NAME}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  return (
    <FlatList
      data={PillInfoList}
      renderItem={renderList}
      keyExtractor={(item, index) => index.toString()}
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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(8, 720),
  },
  pillName: {
    color: 'black',
    fontSize: RFValue(30, 720),
    fontFamily: 'Jua-Regular',
  },
});

export {Header, PillInfoButtonList};
