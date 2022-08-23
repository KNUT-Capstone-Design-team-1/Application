import * as React from 'react';
import {SafeAreaView, StyleSheet, Image} from 'react-native';
import {sendImage} from '../api/pill_search';

export default function Loading(props) {
  sendImage(props);
  return (
    // 로딩 이미지 출력
    <SafeAreaView style={{flex: 1}}>
      <Image
        style={styles.photo_st}
        source={require('../../image/loading_screen.png')}
      />
    </SafeAreaView>
  );
}

// 전체화면 디자인
const styles = StyleSheet.create({
  // 로딩 이미지 레이아웃
  photo_st: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
});
