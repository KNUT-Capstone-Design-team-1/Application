import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {ModalStyles} from '../styles';
import {ModalComponents} from '../components';

const {styles} = ModalStyles;

function WarningModal(props) {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <ModalComponents.Header style={styles.header} />

      {/* 경고 문구 */}
      <ModalComponents.misuseText />

      {/* 동의 및 거부 버튼 */}
      <SafeAreaView style={styles.buttonContainer}>
        <ModalComponents.misUseAgreeButton navigation={navigation} />

        <ModalComponents.misUseDeclineButton />
      </SafeAreaView>
    </SafeAreaView>
  );
}

export default WarningModal;
