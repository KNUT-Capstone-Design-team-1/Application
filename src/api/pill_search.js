import {ToastAndroid} from 'react-native';
import axios from 'axios';

async function sendImage(navigation, base64Url) {
  ToastAndroid.showWithGravity(
    '검색중..',
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );

  try {
    const url =
      'http://222.108.233.118:17261/pill-search/image?skip=0&limit=20';

    const result = await axios(url, {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({base64Url}),
      timeout: 20000,
    });

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
      '서버 요청 중 오류가 발생했습니다.',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
    navigation.navigate('pictureCheck');
    return;
  }
}

export {sendImage};
