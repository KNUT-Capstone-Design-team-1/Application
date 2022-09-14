import * as React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  TouchableOpacity,
  Image,
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';
import {executeCamera, executeGallery} from '../services/pill_search';

const Header = props => {
  const {style} = props;

  return (
    <SafeAreaView style={style}>
      <Text style={styles.text}>사진 확인</Text>
    </SafeAreaView>
  );
};

const PillImage = props => {
  const {style} = props;

  return <Image style={style} source={{uri: imageUrl}} />;
};

const SearchButton = props => {
  const {navigation, style} = props;

  return (
    <TouchableOpacity
      style={style}
      onPress={() => {
        navigation.navigate('loading'), (isPillManaging = 0);
      }}>
      <Image style={styles.image} source={require('../../image/search.png')} />
    </TouchableOpacity>
  );
};

const RetakeButton = props => {
  const {style} = props;

  return (
    <TouchableOpacity style={style} onPress={() => executeCamera(props)}>
      <Image
        style={styles.image}
        source={require('../../image/recamera.png')}
      />
    </TouchableOpacity>
  );
};

const ReGallary = props => {
  const {style} = props;

  return (
    <TouchableOpacity style={style} onPress={() => executeGallery(props)}>
      <Image style={styles.image} source={require('../../image/gallery.png')} />
    </TouchableOpacity>
  );
};

const MainButton = props => {
  const {navigation, style} = props;

  return (
    <TouchableOpacity style={style} onPress={() => navigation.navigate('main')}>
      <Image style={styles.image} source={require('../../image/main.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
    fontSize: RFValue(35, 720),
    fontFamily: 'Jua-Regular',
  },
});

export {Header, PillImage, SearchButton, RetakeButton, ReGallary, MainButton};
