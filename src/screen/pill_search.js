import * as React from 'react';
import {SafeAreaView} from 'react-native';
import * as Components from '../components';
import {PillSearchStyles} from '../styles';

const {styles} = PillSearchStyles;

function PillSearch(props) {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <Components.PillSearchComponents.Header style={styles.header} />

      {/* 예시 이미지 */}
      <Components.PillSearchComponents.ExampleImage style={styles.image} />

      {/* 안내사항 */}
      <Components.PillSearchComponents.GuidelineText style={styles.guideline} />

      {/* 버튼 컨테이너 */}
      <SafeAreaView style={styles.buttonContainer}>
        {/* 촬영 버튼 */}
        <Components.PillSearchComponents.TakeButton
          navigation={navigation}
          style={styles.opacity}
        />

        {/* 갤러리 버튼 */}
        <Components.PillSearchComponents.GalleryButton
          navigation={navigation}
          style={styles.opacity}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default PillSearch;
