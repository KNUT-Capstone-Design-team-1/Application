import React, {useEffect} from 'react';
import {SafeAreaView, Image, BackHandler} from 'react-native';
import {LoadingStyles} from '../styles';
import * as Api from '../api';

const {styles} = LoadingStyles;

function Loading(props) {
  const {navigation, route} = props;
  const {params} = route;

  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  });

  Api.PillSearchApi.sendImage(navigation, params.base64Url);

  return (
    <SafeAreaView style={styles.loadingImageViewSt}>
      {/* 로딩 이미지 */}
      <Image
        style={styles.loadingImage}
        source={require('../../image/loading_screen.png')}
      />
    </SafeAreaView>
  );
}

export default Loading;
