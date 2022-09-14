import * as React from 'react';
import {WebView} from 'react-native-webview';
import {SafeAreaView, Text} from 'react-native';
import * as Styles from '../styles';

const Header = props => {
  const {style} = props;

  return (
    <SafeAreaView style={style}>
      <Text style={Styles.PharmacyInformationStyles.styles.text}>
        약국 정보
      </Text>
    </SafeAreaView>
  );
};

const PharmacyInfo = props => {
  const {style} = props;
  return <WebView style={style} source={{uri: pharm_url}} useWebkit={true} />;
};

export {Header, PharmacyInfo};
