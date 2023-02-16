import React, {useEffect} from 'react';
import {SafeAreaView, BackHandler} from 'react-native';
import * as Components from '../components';
import {PharmacyInformationStyles} from '../styles';

const {styles} = PharmacyInformationStyles;

function PharmacyInfo(props) {
  const {navigation, route} = props;
  const {params} = route;

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('nearbyPharmacy');
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
