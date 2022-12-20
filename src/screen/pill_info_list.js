import React from 'react';
import {SafeAreaView} from 'react-native';
import * as Components from '../components';
import * as Styles from '../styles';

function PillInfoList(props) {
  const {navigation, route} = props;
  const {params} = route;
  const {PillInfos} = params;

  return (
    <SafeAreaView style={Styles.PillInfoListStyles.styles.container}>
      {/* 헤더 */}
      <Components.PillInfoListComponents.Header
        style={Styles.PillInfoListStyles.styles.header}
      />

      {/* 알약 정보 버튼 리스트 */}
      <Components.PillInfoListComponents.PillInfoButtonList
        navigation={navigation}
        PillInfoList={PillInfos}
      />
    </SafeAreaView>
  );
}

export default PillInfoList;
