import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ToastAndroid} from 'react-native';

// 카메라 실행
function executeCamera(props) {
  const options = {
    mediaType: 'photo',
    cameraType: 'front',
    saveToPhotos: true,
    includeBase64: true,
  };

  try {
    launchCamera(options, image => {
      const {navigation} = props;

      if (image.uri != null) {
        navigation.navigate('pictureCheck', {
          imageUrl: image.uri,
          base64Url: image.base64,
        });
      }
    });
  } catch (e) {
    if (e === 'camera_unavailable') {
      ToastAndroid.showWithGravity(
        '카메라를 사용할 수 없습니다',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
    } else if (e === 'permission') {
      ToastAndroid.showWithGravity(
        '앱의 카메라 권한을 허용해주세요.',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
    } else {
      ToastAndroid.showWithGravity(
        `오류코드 : ${e}`,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
    }
  }
}

// 갤러리 실행
function executeGallery(props) {
  const options = {
    mediaType: 'photo',
    quality: 1,
    includeBase64: true,
  };

  try {
    launchImageLibrary(options, image => {
      const {navigation} = props;

      if (image.uri != null) {
        navigation.navigate('pictureCheck', {
          imageUrl: image.uri,
          base64Url: image.base64,
        });
      }
    });
  } catch (e) {
    if (e === 'permission') {
      ToastAndroid.showWithGravity(
        '앱의 권한을 허용해주세요.',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
    } else {
      ToastAndroid.showWithGravity(
        `오류코드 : ${e}`,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
    }
  }
}

export {executeCamera, executeGallery};
