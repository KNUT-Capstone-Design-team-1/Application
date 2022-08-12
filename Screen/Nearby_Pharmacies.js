import React, {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';

// 선택한 약국의 정보가 적힌 kakao map 주소
global.pharm_url = '';

export default function Nearby_Pharmacies(props) {
  const [pharmMap, setPharmMap] = useState();
  const {navigation} = props;

  useFocusEffect(
    useCallback(() => {
      const getPharmList = async () => {
        // 마지막 위치정보 좌표를 카카오맵 API로 전송
        Geolocation.getCurrentPosition(async position => {
          try {
            // position.longitude   position.latitude
            let response = await fetch(
              'https://dapi.kakao.com/v2/local/search/category.json?category_group_code=PM9&radius=500&x=' +
                position.coords.longitude +
                '&y=' +
                position.coords.latitude +
                '&input_coord=WGS84',
              {
                headers: {
                  Authorization: 'KakaoAK 33a8b02db1a0de6d37b4d7de43955e46',
                },
              },
            );
            // 카카오맵으로 부터 응답받은 데이터를 json으로 파싱
            const result_tmp = await response.json();

            // 약국의 이름과 정보 url만 추출하여 리스트에 저장
            const pharms = result_tmp.documents.map(res => ({
              name: res.place_name,
              url: res.place_url,
            }));
            setPharmMap(pharms);
          } catch (e) {
            console.log(e);
          }
        });
      };
      getPharmList();
    }, []),
  );

  // kakao map api으로 부터 받아온 약국 이름을 표시하기 위한 Flat List 렌더링 <스크롤>
  const render_list = ({item}) => (
    // Flat List에 item으로 부터 받아온 정보를 버튼으로 생성
    <SafeAreaView style={styles.flat_st}>
      <TouchableOpacity
        style={styles.list_st}
        onPress={() => {
          (pharm_url = item.url), navigation.navigate('Pharmacy_Info');
        }}>
        <Text style={styles.pharm_name}>{item.name}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <SafeAreaView style={styles.header}>
        {/* 메인 화면 이동 버튼 */}
        <TouchableOpacity
          style={styles.opacity_st}
          onPress={() => navigation.navigate('Main')}>
          <Image style={styles.btn_st} source={require('../image/home.png')} />
        </TouchableOpacity>

        <Text style={styles.txt_st}>내 주변 약국</Text>
      </SafeAreaView>

      {/* 약국 목록을 표시하기 위한 Flat List */}
      <FlatList
        data={pharmMap}
        renderItem={render_list}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

// 디자인 레이아웃
const styles = StyleSheet.create({
  // 전체 화면 레이아웃
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
  // 헤더 텍스트 레이아웃
  header_txt: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Flat List 레이아웃
  flat_st: {
    flex: 1,
    margin: '4%',
    backgroundColor: '#BDECB6',
    borderRadius: RFValue(8, 720),
  },
  // Flat List에 생성되는 버튼 디자인
  list_st: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(8, 720),
  },
  // 약국 이름 목록 텍스트 레이아웃
  pharm_name: {
    color: 'black',
    fontSize: RFValue(30, 720),
    fontFamily: 'Jua-Regular',
  },
  // 메인 화면 이동 버튼 레이아웃
  opacity_st: {
    height: '100%',
    width: '15%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  // 메인 화면 이동 버튼 이미지 레이아웃
  btn_st: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  // 전체적인 텍스트 레이아웃
  txt_st: {
    color: 'white',
    fontSize: RFValue(30, 720),
    fontFamily: 'Jua-Regular',
  },
});
