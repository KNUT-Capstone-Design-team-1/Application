import React, {useEffect} from 'react';
import {SafeAreaView, Image, BackHandler} from 'react-native';
import {LoadingStyles} from '../styles';

const {styles} = LoadingStyles;

function Loading() {
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

  return (
    <SafeAreaView style={styles.loadingImageViewSt}>
      {/* 로딩 이미지 */}
      <Image
        style={styles.loadingImage}
        source={require('../../image/loading_screen_new.png')}
      />
    </SafeAreaView>
  );
}

export default Loading;
