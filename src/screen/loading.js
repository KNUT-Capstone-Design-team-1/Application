import * as React from 'react';
import {SafeAreaView, Image} from 'react-native';
import * as Styles from '../styles';

function Loading() {
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
