import * as React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

const LogoImage = props => {
  const {style} = props;
  return (
    <Image style={style} source={require('../../image/wip_main_logo.png')} />
  );
};

const MainButton = props => {
  const {navigation, style} = props;

  return (
    <TouchableOpacity style={style} onPress={() => navigation.navigate('main')}>
      <Image style={styles.btn} source={require('../../image/home.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
