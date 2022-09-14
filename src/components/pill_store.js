import * as React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import {getAllPills} from '../database/queries/pill_search';
import {getPillInfo} from '../services/pill_store';

const PillStoreButton = props => {
  const {navigation, style} = props;

  return (
    <TouchableOpacity
      style={style}
      onPress={() => navigation.navigate('pillStore')}>
      <Image
        style={styles.image}
        source={require('../../image/pill_store.png')}
      />
    </TouchableOpacity>
  );
};

const Header = props => {
  const {style} = props;

  return (
    <SafeAreaView style={style}>
      <Text style={styles.text}>알약 보관함</Text>
    </SafeAreaView>
  );
};

const PillList = props => {
  const stored_pill_list = getAllPills();
  const stored_pill_name = stored_pill_list.map(tmp => ({name: tmp.name}));

  const renderList = ({item}) => (
    <SafeAreaView style={styles.listContainer}>
      <TouchableOpacity
        style={styles.listOpacity}
        onPress={() => {
          (ref_name = item.name), getPillInfo(props);
        }}>
        <Text style={styles.listText}>{item.name}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  return <FlatList data={stored_pill_name} renderItem={renderList} />;
};

const NearByPharmacyButton = props => {
  const {navigation, style} = props;

  return (
    <TouchableOpacity
      style={style}
      onPress={() => navigation.navigate('nearbyPharmacy')}>
      <Image
        style={styles.image1}
        source={require('../../image/nearby_pharmacy_long.png')}
      />
    </TouchableOpacity>
  );
};

const MainButton = props => {
  const {navigation, style} = props;

  return (
    <TouchableOpacity style={style} onPress={() => navigation.navigate('main')}>
      <Image
        style={styles.image1}
        source={require('../../image/main_long.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: RFValue(30, 720),
    fontFamily: 'Jua-Regular',
  },
  image: {
    height: '100%',
    width: '100%',
    margin: '2%',
  },
  image1: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  listContainer: {
    flex: 1,
    margin: '3%',
    backgroundColor: '#BDECB6',
    borderRadius: RFValue(8, 720),
  },
  listOpacity: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(8, 720),
  },
  listText: {
    color: 'black',
    fontSize: RFValue(30, 720),
    fontFamily: 'Jua-Regular',
  },
});

export {PillStoreButton, Header, PillList, NearByPharmacyButton, MainButton};
