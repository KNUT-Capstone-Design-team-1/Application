import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import * as Components from '../components';
import * as Styles from '../styles';

function NearbyPharmacy(props) {
  const {navigation} = props;

  return (
    <SafeAreaView style={Styles.NearbyPharmacyStyles.styles.container}>
      {/* 헤더 */}
      <Components.NearbyPharmacyComponents.Header
        style={Styles.NearbyPharmacyStyles.styles.header}
      />

      {/* 약국 버튼 리스트 */}
      <Components.NearbyPharmacyComponents.PharmacyInfoButtonList
        navigation={navigation}
      />
    </SafeAreaView>
  );
}

export default NearbyPharmacy;
