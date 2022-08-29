import {ToastAndroid} from 'react-native';

async function sendImage(props) {
  ToastAndroid.showWithGravity(
    '검색중..',
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );

  try {
    const {navigation} = props;
    const post_data = {img_base64: img_base64};

    // 메인 서버로 REST를 통해 POST로 전송 및 전송 성공 여부 확인
    let response = await fetch('http://118.37.24.125:17261/image', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(post_data),
    });

    // 메인 서버로 부터 받아온 Json 데이터
    const p_datadummy = await response.json();

    // 서버 예외처리에 대한 예외처리 <메시지 출력 및 알맞는 화면 이동>
    if (p_datadummy[0].status === 'good') {
      ToastAndroid.showWithGravity(
        '검색완료',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );

      p_data = p_datadummy[0].resBody.map(item => item);
      navigation.navigate('pillInformation');
    } else if (p_datadummy[0].status === 'bad') {
      const {navigation} = props;

      ToastAndroid.showWithGravity(
        `${p_datadummy[0].message}`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      navigation.navigate('pictureCheck');
    }
  } catch (e) {
    const {navigation} = props;

    ToastAndroid.showWithGravity(
      `에러코드 : ${e}`,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
    navigation.navigate('pictureCheck');
  }
}

export {sendImage};
