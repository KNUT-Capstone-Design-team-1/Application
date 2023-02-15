import React, {useEffect} from 'react';
import {SafeAreaView, BackHandler} from 'react-native';
import * as Components from '../components';
import {PillInfoListStyles} from '../styles';

const {styles} = PillInfoListStyles;

function PillInfoList(props) {
  const {navigation, route} = props;
  const {params} = route;

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('pictureCheck');
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
      <Components.PillInfoListComponents.Header style={styles.header} />

      {/* 알약 정보 버튼 리스트 */}
      <Components.PillInfoListComponents.PillInfoButtonList
        navigation={navigation}
        PillInfoList={params}
      />
    </SafeAreaView>
  );
}

export default PillInfoList;
