import * as React from 'react';
import {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ToastAndroid, PermissionsAndroid, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Main from './Screen/Main';
import Check_Pic from './Screen/Check_Pic';
import Search_Pill from './Screen/Search_Pill';
import Pill_Information from './Screen/Pill_Information';
import Pill_Storage from './Screen/Pill_Storage';
import Nearby_Pharmacies from './Screen/Nearby_Pharmacies';
import Pharmacy_Info from './Screen/Pharmacy_Info';
import Loading_Page from './Screen/Loading_Page';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const Stack = createStackNavigator();

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

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2500);
  });

  requestPermission();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Check_Pic"
          component={Check_Pic}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search_Pill"
          component={Search_Pill}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pill_Information"
          component={Pill_Information}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pill_Storage"
          component={Pill_Storage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Nearby_Pharmacies"
          component={Nearby_Pharmacies}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pharmacy_Info"
          component={Pharmacy_Info}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Loading_Page"
          component={Loading_Page}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
