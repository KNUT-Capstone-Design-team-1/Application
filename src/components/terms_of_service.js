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
      목적{'\n'}이 약관은 이게뭐약 애플리케이션의 서비스 이용 및 제공에 관한
      제반 사항의 규정을 목적으로 합니다{'\n\n\n'}
      개인정보 활용 고지{'\n'}
      서비스 이용과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수
      있습니다.{'\n'}- 이미지 검색: 검색 형식, 검색한 이미지 데이터, 검색 날짜
      {'\n'}- 식별 검색 및 상세 정보 검색: 검색 형식, 검색 날짜{'\n\n\n'}
      개인정보의 수집 방법{'\n'}: 이게뭐약은 정보 제공자로서, 검색 시 발생하는
      데이터 (검색 형식, 이미지 데이터, 검색 날짜)를 수집합니다.{'\n\n\n'}
      수집한 개인정보의 이용{'\n'}: 이게뭐약은 수집된 데이터를 통해 검색 정확도
      및 서비스 개선을 위해 활용합니다.{'\n\n\n'}
      책임의 한계 및 법적 고지{'\n'}: 이게뭐약은 이게뭐약은 식의약 데이터 포털의
      "완제 의약품 허가 상세 데이터"와 "의약품 낱알식별정보 데이터"를 기반으로
      검색지원의 목적을 가진 정보를 제공합니다.{'\n'}
      이게뭐약은 정보의 정확성을 위해 노력하고 있으나, 정보의 정확성 및 신뢰성,
      적법성에 대해 어떠한 보증도 하지 않으며 편집상의 오류, 허가사항 변경,
      추가적인 학술연구 또는 임상연구 발표등으로 인해 발생하는 문제에 대해
      이게뭐약은 책임지지 않습니다.{'\n'}
      이게뭐약은 정보를 수정할 의무를 지지 않으나 필요에 따라 개선할 수
      있습니다.{'\n'}
      이게뭐약은 "검색 지원 서비스"로서 서비스 및 정보와 관련하여 직접, 간접,
      부수적, 징벌적, 파생적인 손해에 관해서 책임을 지지 않습니다.{'\n'}
      이게뭐약은 "구체적인 약의 정보 및 복용"에 대해서는 약사에게 확인할 것을
      사용자에게 고지하고 있으며, 이를 사용자가 확인하지 않아 발생한 오용에
      대해서는 이게뭐약은 책임을 지지 않습니다.
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
    fontSize: RFValue(15, 720),
    fontWeight: 'bold',
  },
  textHilight: {color: 'red'},
  button: {
    width: '45%',
    marginVertical: '5%',
    marginHorizontal: '1%',
    padding: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#81C147',
  },
  buttonText: {
    fontSize: RFValue(25, 720),
    fontFamily: 'Jua-Regular',
  },
});

export {Header, misuseText, serviceAgreeButton, misUseDeclineButton};
