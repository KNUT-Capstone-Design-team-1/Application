import {ToastAndroid} from 'react-native';
import axios from 'axios';
import {mainServerAddress} from '../../res/config.json';

async function sendImage(base64Url, skip = 0, limit = 20) {
  ToastAndroid.showWithGravity(
    '검색중..',
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );

  try {
    const url = `${mainServerAddress}/pill-search/image?skip=${skip}&limit=${limit}`;

    const {data: response} = await axios(url, {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      data: {base64Url},
      timeout: 30000,
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

async function requestRecognitionSearch(recogData, skip = 0, limit = 20) {
  ToastAndroid.showWithGravity(
    '검색중..',
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );

  try {
    const url = `${mainServerAddress}/pill-search/recognition?skip=${skip}&limit=${limit}`;

    const {data: response} = await axios(url, {
      method: 'GET',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      data: recogData,
      timeout: 30000,
    });

    if (!response.isSuccess) {
      throw new Error('검색 실패');
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

export {sendImage, requestRecognitionSearch};
