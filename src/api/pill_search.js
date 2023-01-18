import {ToastAndroid} from 'react-native';

async function sendImage(navigation, base64Url) {
  ToastAndroid.showWithGravity(
    '검색중..',
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );

  try {
    const url = 'http://118.37.24.125:17261/pill-search/image?skip=0&limit=20';

    let response = await fetch(url, {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({base64Url}),
    });

    // 메인 서버로 부터 받아온 Json 데이터
    const result = await response.json();

    if (!result.isSuccess) {
      ToastAndroid.showWithGravity(
        `검색 실패: ${result.message}`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      navigation.navigate('pictureCheck');
      return;
    }

    if (result.data.length === 0) {
      ToastAndroid.showWithGravity(
        '일치하는 알약 정보가 없습니다.',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      navigation.navigate('pictureCheck');
      return;
    }

    ToastAndroid.showWithGravity(
      '검색 성공',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );

    navigation.navigate('pillInfoList', result.data);
    return;
  } catch (e) {
    ToastAndroid.showWithGravity(
      `에러코드 : ${e}`,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
    console.log(e);
    navigation.navigate('pictureCheck');
    return;
  }
}

export {sendImage};
