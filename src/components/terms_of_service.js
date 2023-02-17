import * as React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import RNExitApp from 'react-native-exit-app';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ToastAndroid,
} from 'react-native';
import {ConfigService} from '../services';

const Header = props => {
  const {style} = props;
  return (
    <SafeAreaView style={style}>
      <Text style={styles.headerText}>약관</Text>
    </SafeAreaView>
  );
};

const misuseText = () => {
  return (
    <Text style={styles.text}>
      본 서비스는 아직 개발 중인 서비스로, 알약 검색 기능을 통해 얻은 정보가
      부정확할 수 있습니다.
      {'\n\n'}
      <Text style={styles.textHilight}>
        이에 따라 본 서비스를 통해 약물 복용을 결정하는 것은 절대 금하며, 반드시
        의사 혹은 약사와의 상담을 통해 복용을 결정하는 것을 권장합니다.{'\n\n'}
      </Text>
      약관의 내용을 이해 했으며, 약물 오남용과 관련된 사항들은 사용자의 책임임을
      동의합니다.
    </Text>
  );
};

const serviceAgreeButton = props => {
  const {navigation} = props;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        ConfigService.updateserviceAgree('agree');
        navigation.navigate('main');
      }}>
      <Text style={styles.buttonText}>동의</Text>
    </TouchableOpacity>
  );
};

const misUseDeclineButton = () => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        ToastAndroid.showWithGravity(
          '약관에 동의하지 않아 앱을 종료합니다.',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );

        setTimeout(() => {
          RNExitApp.exitApp();
        }, 500);
      }}>
      <Text style={styles.buttonText}>거부</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: RFValue(30, 720),
    fontWeight: 'bold',
    fontFamily: 'Jua-Regular',
  },
  text: {
    padding: '10%',
    fontSize: RFValue(25, 720),
    fontWeight: 'bold',
  },
  textHilight: {color: 'red'},
  button: {
    margin: '10%',
    padding: '5%',
    backgroundColor: '#81C147',
    borderRadius: 20,
  },
  buttonText: {
    padding: '5%',
    fontSize: RFValue(30, 720),
    fontFamily: 'Jua-Regular',
  },
});

export {Header, misuseText, serviceAgreeButton, misUseDeclineButton};
