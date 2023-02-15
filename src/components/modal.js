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
      <Text style={styles.headerText}>주의사항</Text>
    </SafeAreaView>
  );
};

const misuseText = () => {
  return (
    <Text style={styles.text}>
      알약을 촬영하여 검색하는 경우 {'\n'}검색결과가 부정확할 수 있으니
      {'\n\n'}복용은&nbsp;
      <Text style={styles.textHilight}>
        반드시 의사 혹은 약사와의 상담을 통해 결정하시는 것을 권장합니다.
      </Text>
      {'\n\n'}해당 서비스를 통해 얻은 정보를 통한 약품의 복용을 금하며 이에 따른
      약물 약물 오남용에 대해서 사용자의 책임임을 동의합니다.
    </Text>
  );
};

const misUseAgreeButton = props => {
  const {navigation} = props;

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        ConfigService.updateMisUseAgree('agree');
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
          '주의사항에 동의하지 않아 앱을 종료합니다.',
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
    fontSize: RFValue(30, 720),
    fontFamily: 'Jua-Regular',
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

export {Header, misuseText, misUseAgreeButton, misUseDeclineButton};
