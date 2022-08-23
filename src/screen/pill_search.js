import * as React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {executeCamera, executeGallery} from '../services/pill_search';

export default function PillSearch(props) {
  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <SafeAreaView style={styles.header}>
        <Text style={styles.header_txt}>이렇게 찍어주세요</Text>
      </SafeAreaView>

      {/* 예시 이미지 */}
      <Image
        style={styles.photo_st}
        source={require('../../image/sample_img.jpg')}
      />

      {/* 안내사항 */}
      <Text style={styles.description_txt}>
        {'\n '}ㆍ 알약의 글자가 잘보이게 찍어주세요{'\n\n '}ㆍ 글자가 수평으로
        보이게 찍어주세요{'\n\n '}ㆍ 알약은 하나씩 올려서 찍어주세요{'\n\n '}
      </Text>

      {/* 버튼  */}
      <SafeAreaView style={styles.btn_container}>
        {/* 촬영 버튼 */}
        <TouchableOpacity
          style={styles.opacity_st}
          onPress={() => executeCamera(props)}>
          <Image
            style={styles.btn_st}
            source={require('../../image/camera.png')}
          />
        </TouchableOpacity>

        {/* 갤러리 버튼 */}
        <TouchableOpacity
          style={styles.opacity_st}
          onPress={() => executeGallery(props)}>
          <Image
            style={styles.btn_st}
            source={require('../../image/gallery.png')}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}

// 디자인 레이아웃
const styles = StyleSheet.create({
  // 전체적인 레이아웃
  container: {
    flex: 1,
    backgroundColor: '#81C147',
    alignItems: 'center',
  },
  // 헤더 레이아웃
  header: {
    height: '6%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // 헤더 텍스트 디자인
  header_txt: {
    color: 'white',
    fontSize: RFValue(30, 720),
    fontFamily: 'Jua-Regular',
  },
  // 예시 이미지 레이아웃
  photo_st: {
    height: '50%',
    width: '100%',
    marginVertical: '2%',
    resizeMode: 'contain',
  },
  // 설명 텍스트 레이아웃
  description_txt: {
    height: '30%',
    width: '90%',
    color: 'black',
    fontSize: RFValue(21, 720),
    // fontSize: 21,
    fontWeight: 'bold',
    fontFamily: 'NanumSquareEB',
    borderWidth: RFValue(2, 720),
    borderRadius: RFValue(8, 720),
    backgroundColor: '#BDECB6',
  },
  // 버튼 컨테이너 레이아웃
  btn_container: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-15%',
    flexDirection: 'row',
  },
  // 버튼 레이아웃
  opacity_st: {
    height: '25%',
    width: '45%',
    margin: '2%',
    borderRadius: RFValue(5, 720),
    justifyContent: 'center',
    alignItems: 'center',
  },
  // 버튼 이미지 레이아웃
  btn_st: {
    height: '100%',
    width: '100%',
    margin: '2%',
  },
});
