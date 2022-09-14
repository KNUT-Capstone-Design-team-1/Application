import * as React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  TouchableOpacity,
  Image,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {PillStoreService} from '../services';

const Header = props => {
  const {style} = props;

  return (
    <SafeAreaView style={style}>
      <Text style={styles.text}>알약 정보</Text>
    </SafeAreaView>
  );
};

const PillImage = props => {
  const {style} = props;
  return <Image style={style} source={{uri: p_data[0].image}} />;
};

const PillInfo = props => {
  return (
    <ScrollView>
      <Text style={styles.item}>
        {'\n '}이름 : {p_data[0].name}
        {'\n\n\n\n'} 효능 및 효과 {'\n'} : {p_data[0].effect}
        {'\n\n\n\n'} 용법 및 용량 {'\n'} : {p_data[0].dosage}
        {'\n\n\n\n'} 주의사항 {'\n'} : {p_data[0].caution}
        {'\n\n\n\n'} 복약정보 {'\n'} : {p_data[0].take}
        {'\n\n\n\n'} 제조사 {'\n'} : {p_data[0].maker}
      </Text>
    </ScrollView>
  );
};

const NearByPharmacyButton = props => {
  const {navigation, style} = props;

  return (
    <TouchableOpacity
      style={style}
      onPress={() => navigation.navigate('nearbyPharmacy')}>
      <Image
        style={styles.image}
        source={require('../../image/nearby_pharmacy_mini.png')}
      />
    </TouchableOpacity>
  );
};

const SaveButton = props => {
  const {style} = props;

  return (
    <TouchableOpacity
      style={style}
      onPress={() => PillStoreService.savePillInfo(props)}>
      <Image style={styles.image} source={require('../../image/save.png')} />
    </TouchableOpacity>
  );
};

const DeleteButton = props => {
  const {style} = props;

  return (
    <TouchableOpacity
      style={style}
      onPress={() => PillStoreService.deletePillInfo(props)}>
      <Image style={styles.image} source={require('../../image/delete.png')} />
    </TouchableOpacity>
  );
};

const MainButton = props => {
  const {navigation, style} = props;

  return (
    <TouchableOpacity style={style} onPress={() => navigation.navigate('main')}>
      <Image
        style={styles.image}
        source={require('../../image/main_mini.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    color: 'black',
    fontSize: RFValue(20, 720),
    fontFamily: 'NanumGothicBold',
    padding: '2%',
    backgroundColor: '#BDECB6',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
    fontSize: RFValue(35, 720),
    fontFamily: 'Jua-Regular',
  },
});

export {
  Header,
  PillImage,
  PillInfo,
  NearByPharmacyButton,
  SaveButton,
  DeleteButton,
  MainButton,
};
