import React, {useEffect} from 'react';
import {SafeAreaView, Image, BackHandler} from 'react-native';
import * as Styles from '../styles';
import * as Api from '../api';

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
    <SafeAreaView style={Styles.LoadingStyles.styles.loadingImageViewSt}>
      {/* 로딩 이미지 */}
      <Image
        style={Styles.LoadingStyles.styles.loadingImage}
        source={require('../../image/loading_screen.png')}
      />
    </SafeAreaView>
  );
}

export default Loading;
