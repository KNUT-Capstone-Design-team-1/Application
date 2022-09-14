import * as React from 'react';
import {SafeAreaView} from 'react-native';
import * as Components from '../components';
import * as Styles from '../styles';

function PictureCheck(props) {
  const {navigation} = props;

  return (
    <SafeAreaView style={Styles.PictureCheckStyles.styles.container}>
      {/* 헤더 */}
      <Components.PictureCheckComponents.Header
        style={Styles.PictureCheckStyles.styles.header}
      />

      {/* 알약 이미지 */}
      <Components.PictureCheckComponents.PillImage
        style={Styles.PictureCheckStyles.styles.pillImage}
      />

      {/* 검색 버튼 */}
      <Components.PictureCheckComponents.SearchButton
        navigation={navigation}
        style={Styles.PictureCheckStyles.styles.searchButton}
      />

      <SafeAreaView style={Styles.PictureCheckStyles.styles.buttonLayer1}>
        {/* 재촬영 버튼 */}
        <Components.PictureCheckComponents.RetakeButton
          navigation={navigation}
          style={Styles.PictureCheckStyles.styles.button}
        />

        {/* 갤러리 버튼 */}
        <Components.PictureCheckComponents.ReGallary
          navigation={navigation}
          style={Styles.PictureCheckStyles.styles.button}
        />
      </SafeAreaView>

      {/* 메인화면 버튼 */}
      <Components.PictureCheckComponents.MainButton
        navigation={navigation}
        style={Styles.PictureCheckStyles.styles.buttonLayer2}
      />
    </SafeAreaView>
  );
}

export default PictureCheck;
