import * as React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const PillStoreButton = props => {
  const {navigation} = props;

  return (
    <TouchableOpacity
      style={styles.opacity}
      onPress={() => navigation.navigate('pillStore')}>
      <Image
        style={styles.button}
        source={require('../../image/pill_store.png')}
      />
    </TouchableOpacity>
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
});

export {PillStoreButton};
