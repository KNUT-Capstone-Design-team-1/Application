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
import {PillInfoQuery} from '../database/queries';

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
  const {navigation} = props;
  const pillList = PillInfoQuery.getAllPills();

  const renderList = ({item}) => (
    <SafeAreaView style={styles.listContainer}>
      <TouchableOpacity
        style={styles.opacityList}
        onPress={() =>
          navigation.navigate('pillInformation', {
            pillDetail: item,
            isManaging: true,
          })
        }>
        <Image style={styles.pillImage} source={{uri: item.ITEM_IMAGE}} />
        <Text style={styles.pillName}>{item.ITEM_NAME}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  return (
    <FlatList
      data={pillList}
      renderItem={renderList}
      keyExtractor={(_item, index) => index.toString()}
    />
  );
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
    margin: '4%',
    backgroundColor: '#BDECB6',
    borderRadius: RFValue(8, 720),
  },
  opacityList: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: '5%',
    paddingBottom: '5%',
    borderRadius: RFValue(8, 720),
  },
  pillImage: {
    height: '100%',
    width: '30%',
    resizeMode: 'stretch',
  },
  pillName: {
    color: 'black',
    flexShrink: 1,
    fontSize: RFValue(25, 720),
    fontFamily: 'Jua-Regular',
  },
});

export {PillStoreButton, Header, PillList, NearByPharmacyButton, MainButton};
