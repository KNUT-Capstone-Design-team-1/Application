import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ToastAndroid,
  Image,
} from 'react-native';

async function Send_img(props) {
  ToastAndroid.showWithGravity(
    '검색중..',
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );

  try {
    const {navigation} = props;
    const post_data = {img_base64: img_base64};

    // 메인 서버로 REST를 통해 POST로 전송 및 전송 성공 여부 확인
    let response = await fetch('http://118.37.24.125:17261/image', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(post_data),
    });

    // 메인 서버로 부터 받아온 Json 데이터
    const p_datadummy = await response.json();

    // 서버 예외처리에 대한 예외처리 <메시지 출력 및 알맞는 화면 이동>
    if (p_datadummy[0].status === 'good') {
      ToastAndroid.showWithGravity(
        '검색완료',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );

      p_data = p_datadummy[0].resBody.map(item => item);
      navigation.navigate('Pill_Information');
    } else if (p_datadummy[0].status === 'bad') {
      const {navigation} = props;

      ToastAndroid.showWithGravity(
        `${p_datadummy[0].message}`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      navigation.navigate('Check_Pic');
    }
  } catch (e) {
    const {navigation} = props;

    ToastAndroid.showWithGravity(
      `에러코드 : ${e}`,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
    navigation.navigate('Check_Pic');
    console.log(e);
  }
}

export default function loading_page(props) {
  const {navigation} = props;

  Send_img(props);
  return (
    // 로딩 이미지 출력
    <SafeAreaView style={{flex: 1}}>
      <Image
        style={styles.photo_st}
        source={require('../image/loading_screen.png')}
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
