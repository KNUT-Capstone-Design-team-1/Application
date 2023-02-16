import React, {useEffect} from 'react';
import {SafeAreaView, BackHandler} from 'react-native';
import * as Components from '../components';
import {PillInformationStyles} from '../styles';

const {styles} = PillInformationStyles;

function PillInformation(props) {
  const {navigation, route} = props;
  const {params} = route;
  const {isManaging, pillDetail} = params;

  useEffect(() => {
    const backAction = () => {
      navigation.navigate(isManaging ? 'pillStore' : 'pillInfoList');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <Components.PillInformationComponents.Header style={styles.header} />

      {/* 알약 이미지 */}
      <Components.PillInformationComponents.PillImage
        style={styles.pillImage}
        image={pillDetail.ITEM_IMAGE}
      />

      {/* 알약에 대한 정보 */}
      <Components.PillInformationComponents.PillInfo pillDetail={pillDetail} />

      {/* 버튼 컨테이너 */}
      <SafeAreaView style={styles.buttonContainer}>
        {/* 내 주변 약국 화면 이동 버튼 */}
        <Components.PillInformationComponents.NearByPharmacyButton
          navigation={navigation}
          style={styles.opacity}
        />

        {isManaging ? (
          // 삭제 버튼
          <Components.PillInformationComponents.DeleteButton
            navigation={navigation}
            ITEM_SEQ={pillDetail.ITEM_SEQ}
            style={styles.opacity}
          />
        ) : (
          // 저장 버튼
          <Components.PillInformationComponents.SaveButton
            pillDetail={pillDetail}
            style={styles.opacity}
          />
        )}

        {/* 메인 화면 이동 버튼*/}
        <Components.PillInformationComponents.MainButton
          navigation={navigation}
          style={styles.opacity}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default PillInformation;
