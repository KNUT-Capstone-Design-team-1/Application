import * as React from 'react';
import {SafeAreaView} from 'react-native';
import * as Components from '../components';
import * as Styles from '../styles';

function PharmacyInfo(props) {
  const {navigation, route} = props;
  const {params} = route;

  return (
    <SafeAreaView style={Styles.PharmacyInformationStyles.styles.container}>
      {/* 헤더 */}
      <Components.PharmacyInformationComponents.Header
        navigation={navigation}
        style={Styles.PharmacyInformationStyles.styles.header}
      />

      {/* 약국 정보 */}
      <Components.PharmacyInformationComponents.PharmacyInfo
        pharmacyUrl={params.pharmacyUrl}
        style={Styles.PharmacyInformationStyles.styles.webView}
      />
    </SafeAreaView>
  );
}

export default PharmacyInfo;
