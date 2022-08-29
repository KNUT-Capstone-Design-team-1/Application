import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import * as Components from '../components';

function Loading() {
  return (
    <SafeAreaView style={styles.loadingImageViewSt}>
      <Components.PillSearchComponents.LoadingImage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingImageViewSt: {flex: 1},
});

export default Loading;
