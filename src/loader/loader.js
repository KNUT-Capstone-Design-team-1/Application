import {ToastAndroid, PermissionsAndroid} from 'react-native';

// 카메라, 내ㆍ외장 스토리지, GPS 권한 요청
async function requestPermission() {
  PermissionsAndroid.requestMultiple([
    // 안드로이드 카메라 촬영 권한
    PermissionsAndroid.PERMISSIONS.CAMERA,
    // 안드로이드 외장 스토리지 쓰기 권한
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    // 안드로이드 외장 스토리지 읽기 권한
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    // 안드로이드 Coarse location 권한 (네트워크를 사용하는 위치 추적)
    PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    // 안드로이드 FINE location 권한 (네트워크와 GPS를 모두 사용하는 위치 추적)
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  ]).then(result => {
    // 권한 획득 결과 값에 대한 예외처리
    if (
      result['android.permission.CAMERA'] &&
      result['android.permission.WRITE_EXTERNAL_STORAGE'] &&
      result['android.permission.READ_EXTERNAL_STORAGE'] &&
      result['android.permission.ACCESS_COARSE_LOCATION'] &&
      result['android.permission.ACCESS_FINE_LOCATION'] === 'granted'
    ) {
      ToastAndroid.showWithGravity(
        '모든 권한 획득',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    } else {
      ToastAndroid.showWithGravity(
        '권한 거절',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
  });
}

export default requestPermission;
