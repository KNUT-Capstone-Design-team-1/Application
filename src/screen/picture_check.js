import * as React from 'react';
import {SafeAreaView} from 'react-native';
import * as Components from '../components';
import {PictureCheckStyles} from '../styles';

const {styles} = PictureCheckStyles;

function PictureCheck(props) {
  const {navigation, route} = props;
  const {params} = route;

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <Components.PictureCheckComponents.Header style={styles.header} />

      {/* 알약 이미지 */}
      <Components.PictureCheckComponents.PillImage
        style={styles.pillImage}
        imageUrl={params.imageUrl}
      />

      {/* 검색 버튼 */}
      <Components.PictureCheckComponents.SearchButton
        navigation={navigation}
        style={styles.searchButton}
        base64Url={params.base64Url}
      />

      <SafeAreaView style={styles.buttonLayer1}>
        {/* 재촬영 버튼 */}
        <Components.PictureCheckComponents.RetakeButton
          navigation={navigation}
          style={styles.button}
        />

        {/* 갤러리 버튼 */}
        <Components.PictureCheckComponents.ReGallary
          navigation={navigation}
          style={styles.button}
        />
      </SafeAreaView>

      {/* 메인화면 버튼 */}
      <Components.PictureCheckComponents.MainButton
        navigation={navigation}
        style={styles.buttonLayer2}
      />
    </SafeAreaView>
  );
}

export default PictureCheck;
