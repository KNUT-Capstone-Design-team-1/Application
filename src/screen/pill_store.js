import * as React from 'react';
import {getAllPills} from '../database/queries/pill_search';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import {getPillInfo} from '../services/pill_store';

// 선택한 알약의 이름
global.ref_name = '';

export default function PillStore(props) {
  const {navigation} = props;

  // 저장된 알약의 데이터 Loading
  const stored_pill_list = getAllPills();

  // 알약의 데이터 중 이름만 추출하여 Mapping
  const stored_pill_name = stored_pill_list.map(tmp => ({name: tmp.name}));

  // 저장된 알약의 목록을 표시하기 위한 Flat List 렌더링
  const render_list = ({item}) => (
    <SafeAreaView style={styles.List_container}>
      {/* 알약의 이름을 버튼 리스트로 표시 */}
      <TouchableOpacity
        style={styles.List_st}
        onPress={() => {
          (ref_name = item.name), getPillInfo(props);
        }}>
        <Text style={styles.txt_st}>{item.name}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <SafeAreaView style={styles.header}>
        <Text style={styles.header_txt}>알약 보관함</Text>
      </SafeAreaView>

      {/* 저장된 알약 목록을 표시하기 위한 Flat List */}
      <FlatList data={stored_pill_name} renderItem={render_list} />

      {/* 내 주변 약국 화면 이동 버튼 */}
      <TouchableOpacity
        style={styles.opacity_st}
        onPress={() => navigation.navigate('nearbyPharmacy')}>
        <Image
          style={styles.btn_st}
          source={require('../../image/nearby_pharmacy_long.png')}
        />
      </TouchableOpacity>

      {/* 메인 화면 이동 버튼 */}
      <TouchableOpacity
        style={styles.opacity_st}
        onPress={() => navigation.navigate('main')}>
        <Image
          style={styles.btn_st}
          source={require('../../image/main_long.png')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// 디자인
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
  },
  // 헤더 텍스트 레이아웃
  header_txt: {
    color: 'white',
    fontSize: RFValue(30, 720),
    fontFamily: 'Jua-Regular',
  },
  // 저장된 알약 이름을 보여주는 리스트의 레이아웃
  List_container: {
    flex: 1,
    margin: '3%',
    backgroundColor: '#BDECB6',
    borderRadius: RFValue(8, 720),
  },
  // 알약 이름이 출력되는 Flat list의 버튼 레이아웃
  List_st: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(8, 720),
  },
  // 내 주변 약국 및 메인 화면 이동 버튼 레이아웃
  opacity_st: {
    height: '7%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // 버튼 이미지 레이아웃
  btn_st: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  // 텍스트 레이아웃
  txt_st: {
    color: 'black',
    fontSize: RFValue(30, 720),
    fontFamily: 'Jua-Regular',
  },
});
