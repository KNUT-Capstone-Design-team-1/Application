import React from 'react';
import {SafeAreaView} from 'react-native';
import * as Components from '../components';
import {NearbyPharmacyStyles} from '../styles';

const {styles} = NearbyPharmacyStyles;

function NearbyPharmacy(props) {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <Components.NearbyPharmacyComponents.Header style={styles.header} />

      {/* 약국 버튼 리스트 */}
      <Components.NearbyPharmacyComponents.PharmacyInfoButtonList
        navigation={navigation}
      />
    </SafeAreaView>
  );
}

export default NearbyPharmacy;
