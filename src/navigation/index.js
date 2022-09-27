import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '../screen/main';
import PictureCheck from '../screen/picture_check';
import PillSearch from '../screen/pill_search';
import PillInfoList from '../screen/pill_info_list';
import PillInformation from '../screen/pill_information';
import Loading from '../screen/loading';
import NearbyPharmacy from '../screen/nearby_pharmacy';
import PharmacyInfo from '../screen/pharmacy_info';
import PillStore from '../screen/pill_store';

const Stack = createStackNavigator();
const NaviContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        <Stack.Screen
          name="main"
          component={Main}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="pictureCheck"
          component={PictureCheck}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="pillSearch"
          component={PillSearch}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="pillInfoList"
          component={PillInfoList}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="pillInformation"
          component={PillInformation}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="loading"
          component={Loading}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="nearbyPharmacy"
          component={NearbyPharmacy}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="pharmacyInfo"
          component={PharmacyInfo}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="pillStore"
          component={PillStore}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NaviContainer;
