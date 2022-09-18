import {ToastAndroid} from 'react-native';

async function sendImage(navigation, base64Url) {
  ToastAndroid.showWithGravity(
    '검색중..',
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );

  try {
    let response = await fetch(
      `http://118.37.24.125:17261/pill-search/image?imageId=${base64Url}`,
      {method: 'GET'},
    );

    // 메인 서버로 부터 받아온 Json 데이터
    const result = await response.json();

    if (result.isSuccess) {
      ToastAndroid.showWithGravity(
        '검색 성공',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );

      const pillInformation = result[0].resBody.map(item => item);
      navigation.navigate('pillInformation', {pillInformation});
      return;
    }

    ToastAndroid.showWithGravity(
      `${result[0].message}`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  } catch (e) {
    ToastAndroid.showWithGravity(
      `에러코드 : ${e}`,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  }
  navigation.navigate('pictureCheck');
}

export {sendImage};
