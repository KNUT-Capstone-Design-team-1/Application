import * as React from 'react';
import {SafeAreaView} from 'react-native';
import * as Components from '../components';
import * as Styles from '../styles';

function Main(props) {
  const {navigation} = props;

  return (
    <SafeAreaView style={Styles.MainStyles.styles.container}>
      {/* 로고 이미지 */}
      <Components.MainComponents.LogoImage
        navigation={navigation}
        style={Styles.MainStyles.styles.logo}
      />

      {/* 알약 검색 버튼 */}
      <Components.PillSearchComponents.PillSearchButton
        navigation={navigation}
        style={Styles.MainStyles.styles.opacity}
      />

      {/* 내 주변 약국 버튼 */}
      <Components.NearbyPharmacyComponents.NearbyPharmacyButton
        navigation={navigation}
        style={Styles.MainStyles.styles.opacity}
      />

      {/* 알약 보관함 버튼 */}
      <Components.PillStoreComponents.PillStoreButton
        navigation={navigation}
        style={Styles.MainStyles.styles.opacity}
      />
    </SafeAreaView>
  );
}

export default Main;
