import * as React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

const LogoImage = props => {
  return (
    <Image
      style={styles.logo}
      source={require('../../image/wip_main_logo.png')}
    />
  );
};

const MainButton = props => {
  const {navigation} = props;

  return (
    <TouchableOpacity
      style={styles.opacity}
      onPress={() => navigation.navigate('main')}>
      <Image style={styles.btn} source={require('../../image/home.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: '30%',
    width: '100%',
    marginTop: '-15%',
    resizeMode: 'contain',
  },
  opacity: {
    height: '100%',
    width: '15%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  btn: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});

export {LogoImage, MainButton};
