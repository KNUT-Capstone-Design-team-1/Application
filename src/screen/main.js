import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import * as Components from '../components';

global.imageUrl = ''; // 화면에 표시되는 이미지의 주소
global.img_base64 = ''; // json에 첨부될 base64
global.p_data = ''; // 알약에 대한 데이터
global.isPillManaging = 0; // Pill Storage에서 저장 버튼과 삭제 버튼을 전환하는 스위치

export default function Main(props) {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
      {/* 로고 이미지 */}
      <Components.MainComponents.LogoImage navigation={navigation} />

      {/* 알약 검색 버튼 */}
      <Components.PillSearchComponents.PillSearchButton
        navigation={navigation}
      />

      {/* 내 주변 약국 버튼 */}
      <Components.NearbyPharmacyComponents.NearbyPharmacyButton
        navigation={navigation}
      />

      {/* 알약 보관함 버튼 */}
      <Components.PillStoreComponents.PillStoreButton navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81C147',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
