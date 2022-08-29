import * as React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import Geolocation from 'react-native-geolocation-service';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Text,
  FlatList,
} from 'react-native';
import {callNearbyPharmacyApi} from '../api/nearby_pharmacy';

const NearbyPharmacyButton = props => {
  const {navigation} = props;

  return (
    <TouchableOpacity
      style={styles.opacity}
      onPress={() => navigation.navigate('nearbyPharmacy')}>
      <Image
        style={styles.button}
        source={require('../../image/nearby_pharmacy.png')}
      />
    </TouchableOpacity>
  );
};

const PharmacyInfoButtonList = props => {
  const [pharmMap, setPharmMap] = React.useState();
  const {navigation} = props;

  useFocusEffect(
    React.useCallback(() => {
      // 마지막 위치정보 좌표를 카카오맵 API로 전송
      Geolocation.getCurrentPosition(async position => {
        const pharmacyList = await callNearbyPharmacyApi(position);
        const nearbyPharmacies = pharmacyList.documents.map(res => ({
          name: res.place_name,
          url: res.place_url,
        }));

        setPharmMap(nearbyPharmacies);
      });
    }, []),
  );

  // kakao map api으로 부터 받아온 약국 이름을 표시하기 위한 Flat List 렌더링 <스크롤>
  const render_list = ({item}) => (
    <SafeAreaView style={styles.flat}>
      <TouchableOpacity
        style={styles.list}
        onPress={() => {
          navigation.navigate('pharmacyInfo', {pharm_url: item.url});
        }}>
        <Text style={styles.pharmName}>{item.name}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  return (
    <FlatList
      data={pharmMap}
      renderItem={render_list}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  opacity: {
    height: '20%',
    width: '92%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2%',
  },
  button: {
    height: '100%',
    width: '100%',
    margin: '2%',
  },
  flat: {
    flex: 1,
    margin: '4%',
    backgroundColor: '#BDECB6',
    borderRadius: RFValue(8, 720),
  },
  list: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(8, 720),
  },
  pharmName: {
    color: 'black',
    fontSize: RFValue(30, 720),
    fontFamily: 'Jua-Regular',
  },
});

export {NearbyPharmacyButton, PharmacyInfoButtonList};
