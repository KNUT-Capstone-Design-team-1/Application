import React, {useEffect} from 'react';
import RNExitApp from 'react-native-exit-app';
import {SafeAreaView, BackHandler} from 'react-native';
import * as Components from '../components';
import {MainStyles} from '../styles';

const {styles} = MainStyles;

function Main(props) {
  const {navigation} = props;

  useEffect(() => {
    const backAction = () => {
      setTimeout(() => {
        RNExitApp.exitApp();
      }, 100);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* 로고 이미지 */}
      <Components.MainComponents.LogoImage
        navigation={navigation}
        style={styles.logo}
      />

      {/* 알약 검색 버튼 */}
      <Components.PillSearchComponents.PillSearchButton
        navigation={navigation}
        style={styles.opacity}
      />

      {/* 내 주변 약국 버튼 */}
      <Components.NearbyPharmacyComponents.NearbyPharmacyButton
        navigation={navigation}
        style={styles.opacity}
      />

      {/* 알약 보관함 버튼 */}
      <Components.PillStoreComponents.PillStoreButton
        navigation={navigation}
        style={styles.opacity}
      />
    </SafeAreaView>
  );
}

export default Main;
