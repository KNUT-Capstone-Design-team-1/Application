import {ToastAndroid} from 'react-native';
import axios from 'axios';
import {mainServerAddress} from '../../res/config.json';

async function sendImage(base64Url) {
  ToastAndroid.showWithGravity(
    '검색중..',
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );

  try {
    let skip = 0;
    let limit = 20;

    const url = `${mainServerAddress}/pill-search/image?skip=${skip}&limit=${limit}`;

    const {data: response} = await axios(url, {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      data: {base64Url},
      timeout: 20000,
    });

    if (!response.isSuccess) {
      ToastAndroid.showWithGravity(
        `검색 실패: ${response.message}`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      return [];
    }

    if (!response.data || response.data.length === 0) {
      ToastAndroid.showWithGravity(
        '검색 결과가 없습니다.',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      return [];
    }

    ToastAndroid.showWithGravity(
      '검색 성공',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );

    return response.data;
  } catch (e) {
    ToastAndroid.showWithGravity(
      '서버 요청 중 오류가 발생했습니다.',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
    return [];
  }
}

export {sendImage};
