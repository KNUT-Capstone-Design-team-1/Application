import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import * as Components from '../components';

export default function NearbyPharmacy(props) {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 및 메인화면 이동 버튼 */}
      <SafeAreaView style={styles.header}>
        <Components.MainComponents.MainButton navigation={navigation} />
        <Text style={styles.text}>내 주변 약국</Text>
      </SafeAreaView>

      {/* 약국 버튼 리스트 */}
      <Components.NearbyPharmacyComponents.PharmacyInfoButtonList
        navigation={navigation}
      />
    </SafeAreaView>
  );
}

// 디자인 레이아웃
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81C147',
  },
  header: {
    height: '6%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: RFValue(30, 720),
    fontFamily: 'Jua-Regular',
  },
});
