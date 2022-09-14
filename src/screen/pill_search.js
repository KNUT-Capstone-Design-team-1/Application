import * as React from 'react';
import {SafeAreaView} from 'react-native';
import * as Components from '../components';
import * as Styles from '../styles';

function PillSearch(props) {
  const {navigation} = props;

  return (
    <SafeAreaView style={Styles.PillSearchStyles.styles.container}>
      {/* 헤더 */}
      <Components.PillSearchComponents.Header
        style={Styles.PillSearchStyles.styles.header}
      />

      {/* 예시 이미지 */}
      <Components.PillSearchComponents.ExampleImage
        style={Styles.PillSearchStyles.styles.image}
      />

      {/* 안내사항 */}
      <Components.PillSearchComponents.GuidelineText
        style={Styles.PillSearchStyles.styles.guideline}
      />

      {/* 버튼 컨테이너 */}
      <SafeAreaView style={Styles.PillSearchStyles.styles.buttonContainer}>
        {/* 촬영 버튼 */}
        <Components.PillSearchComponents.TakeButton
          navigation={navigation}
          style={Styles.PillSearchStyles.styles.opacity}
        />

        {/* 갤러리 버튼 */}
        <Components.PillSearchComponents.GalleryButton
          navigation={navigation}
          style={Styles.PillSearchStyles.styles.opacity}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default PillSearch;
