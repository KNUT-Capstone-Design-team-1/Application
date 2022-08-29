import * as React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {sendImage} from '../api/pill_search';

const LoadingImage = props => {
  sendImage(props);

  return (
    <Image
      style={styles.loadingImage}
      source={require('../../image/loading_screen.png')}
    />
  );
};

const PillSearchButton = props => {
  const {navigation} = props;

  return (
    <TouchableOpacity
      style={styles.opacity}
      onPress={() => {
        navigation.navigate('pillSearch', {isPillManaging: 0, imageUrl: ''});
      }}>
      <Image
        style={styles.button}
        source={require('../../image/pill_search.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loadingImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
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
});

export {LoadingImage, PillSearchButton};
