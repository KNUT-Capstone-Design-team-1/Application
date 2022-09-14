import * as React from 'react';
import {SafeAreaView} from 'react-native';
import * as Components from '../components';
import * as Styles from '../styles';

function PillInformation(props) {
  const {navigation} = props;

  return (
    <SafeAreaView style={Styles.PillInformationStyles.styles.container}>
      {/* 헤더 */}
      <Components.PillInformationComponents.Header
        style={Styles.PillInformationStyles.styles.header}
      />

      {/* 알약 이미지 */}
      <Components.PillInformationComponents.PillImage
        style={Styles.PillInformationStyles.styles.pillImage}
      />

      {/* 알약에 대한 정보 */}
      <Components.PillInformationComponents.PillInfo />

      {/* 버튼 컨테이너 */}
      <SafeAreaView style={Styles.PillInformationStyles.styles.buttonContainer}>
        {/* 내 주변 약국 화면 이동 버튼 */}
        <Components.PillInformationComponents.NearByPharmacyButton
          navigation={navigation}
          style={Styles.PillInformationStyles.styles.opacity}
        />

        {isPillManaging === 0 ? (
          // 저장 버튼
          <Components.PillInformationComponents.SaveButton
            style={Styles.PillInformationStyles.styles.opacity}
          />
        ) : (
          // 삭제 버튼
          <Components.PillInformationComponents.DeleteButton
            style={Styles.PillInformationStyles.styles.opacity}
          />
        )}

        {/* 메인 화면 이동 버튼*/}
        <Components.PillInformationComponents.MainButton
          style={Styles.PillInformationStyles.styles.opacity}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default PillInformation;
