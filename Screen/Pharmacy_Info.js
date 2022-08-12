import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {WebView} from 'react-native-webview';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default function Pharmacy_Info(props) {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 뒤로가기 버튼 */}
      <SafeAreaView style={styles.header}>
        <TouchableOpacity
          style={styles.opacity_st}
          onPress={() => navigation.navigate('Nearby_Pharmacies')}>
          <Image style={styles.btn_st} source={require('../image/back.png')} />
        </TouchableOpacity>
        {/* 헤더 텍스트 */}
        <Text style={styles.txt_st}>약국 정보</Text>
      </SafeAreaView>

      {/* 약국 정보를 표시하는 웹 뷰 */}
      <WebView
        style={{height: '100%', width: '100%'}}
        source={{uri: pharm_url}}
        useWebkit={true}
      />
    </SafeAreaView>
  );
}

// 화면 디자인
const styles = StyleSheet.create({
  // 전체적인 화면 레이아웃
  container: {
    flex: 1,
    backgroundColor: '#81C147',
  },
  // 헤더 레이아웃
  header: {
    height: '6%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  // 버튼 레이아웃
  opacity_st: {
    height: '100%',
    width: '15%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  // 버튼 내 이미지 레이아웃
  btn_st: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  // 텍스트 레이아웃
  txt_st: {
    color: 'white',
    fontSize: RFValue(30, 720),
    fontFamily: 'Jua-Regular',
  },
});
