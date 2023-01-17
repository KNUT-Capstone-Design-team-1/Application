import React, {useEffect} from 'react';
import {SafeAreaView, BackHandler} from 'react-native';
import * as Components from '../components';
import * as Styles from '../styles';

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
    <SafeAreaView style={Styles.PillInformationStyles.styles.container}>
      {/* 헤더 */}
      <Components.PillInformationComponents.Header
        style={Styles.PillInformationStyles.styles.header}
      />

      {/* 알약 이미지 */}
      <Components.PillInformationComponents.PillImage
        style={Styles.PillInformationStyles.styles.pillImage}
        image={pillDetail.ITEM_IMAGE}
      />

      {/* 알약에 대한 정보 */}
      <Components.PillInformationComponents.PillInfo pillDetail={pillDetail} />

      {/* 버튼 컨테이너 */}
      <SafeAreaView style={Styles.PillInformationStyles.styles.buttonContainer}>
        {/* 내 주변 약국 화면 이동 버튼 */}
        <Components.PillInformationComponents.NearByPharmacyButton
          navigation={navigation}
          style={Styles.PillInformationStyles.styles.opacity}
        />

        {isManaging ? (
          // 삭제 버튼
          <Components.PillInformationComponents.DeleteButton
            navigation={navigation}
            ITEM_SEQ={pillDetail.ITEM_SEQ}
            style={Styles.PillInformationStyles.styles.opacity}
          />
        ) : (
          // 저장 버튼
          <Components.PillInformationComponents.SaveButton
            pillDetail={pillDetail}
            style={Styles.PillInformationStyles.styles.opacity}
          />
        )}

        {/* 메인 화면 이동 버튼*/}
        <Components.PillInformationComponents.MainButton
          navigation={navigation}
          style={Styles.PillInformationStyles.styles.opacity}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default PillInformation;
