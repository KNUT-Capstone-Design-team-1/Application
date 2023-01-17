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
  const {style, image} = props;
  return <Image style={style} source={{uri: image}} />;
};

const PillInfo = props => {
  const {pillDetail} = props;
  const {
    ITEM_NAME,
    ENTP_NAME,
    DRUG_SHAPE,
    CHARTN,
    MAIN_ITEM_INGR,
    INGR_NAME,
    MATERIAL_NAME,
    PACK_UNIT,
    VALID_TERM,
    STORAGE_METHOD,
  } = pillDetail;

  return (
    <ScrollView>
      <Text style={styles.item}>
        {'\n '}품목명 : {ITEM_NAME}
        {'\n\n\n\n'} 제조사 {'\n'} : {ENTP_NAME}
        {'\n\n\n\n'} 모양 {'\n'} : {DRUG_SHAPE}
        {'\n\n\n\n'} 성상 {'\n'} : {CHARTN}
        {'\n\n\n\n'} 주성분 {'\n'} : {MAIN_ITEM_INGR}
        {'\n\n\n\n'} 첨가제 {'\n'} : {INGR_NAME}
        {'\n\n\n\n'} 원료성분 {'\n'} : {MATERIAL_NAME}
        {'\n\n\n\n'} 포장단위 {'\n'} : {PACK_UNIT}
        {'\n\n\n\n'} 유효기간 {'\n'} : {VALID_TERM}
        {'\n\n\n\n'} 저장방법 {'\n'} : {STORAGE_METHOD}
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
