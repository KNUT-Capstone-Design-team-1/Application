import * as React from 'react';
import {SafeAreaView} from 'react-native';
import * as Components from '../components';
import {PharmacyInformationStyles} from '../styles';

const {styles} = PharmacyInformationStyles;

function PharmacyInfo(props) {
  const {navigation, route} = props;
  const {params} = route;

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <Components.PharmacyInformationComponents.Header
        navigation={navigation}
        style={styles.header}
      />

      {/* 약국 정보 */}
      <Components.PharmacyInformationComponents.PharmacyInfo
        pharmacyUrl={params.pharmacyUrl}
        style={styles.webView}
      />
    </SafeAreaView>
  );
}

export default PharmacyInfo;
