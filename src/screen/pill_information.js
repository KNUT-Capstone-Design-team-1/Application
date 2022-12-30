import * as React from 'react';
import {SafeAreaView} from 'react-native';
import * as Components from '../components';
import * as Styles from '../styles';

function PillInformation(props) {
  const {navigation, route} = props;
  const {params} = route;
  const {isManaging, PillDetail} = params;

  return (
    <SafeAreaView style={Styles.PillInformationStyles.styles.container}>
      {/* 헤더 */}
      <Components.PillInformationComponents.Header
        style={Styles.PillInformationStyles.styles.header}
      />

      {/* 알약 이미지 */}
      <Components.PillInformationComponents.PillImage
        style={Styles.PillInformationStyles.styles.pillImage}
        image={PillDetail.ITEM_IMAGE}
      />

      {/* 알약에 대한 정보 */}
      <Components.PillInformationComponents.PillInfo
        itemName={PillDetail.ITEM_NAME}
        entpName={PillDetail.ENTP_NAME}
        drugShape={PillDetail.DRUG_SHAPE}
        mainItemIngr={PillDetail.MAIN_ITEM_INGR}
        ingrName={PillDetail.INGR_NAME}
        matrialName={PillDetail.MATRIAL_NAME}
        packUnit={PillDetail.PACK_UNIT}
        totalContent={PillDetail.TOTAL_CONTENT}
      />

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
            style={Styles.PillInformationStyles.styles.opacity}
          />
        ) : (
          // 저장 버튼
          <Components.PillInformationComponents.SaveButton
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
