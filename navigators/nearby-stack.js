import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Nearby from "../screens/nearby-drugstore";
import DrugStoreInfo from "../screens/drugstore-info";

const NearbyStack = createNativeStackNavigator();

export default function NearbyStacks() {
  return (
    <NearbyStack.Navigator
      screenOptions={{ presentation: "modal", headerShown: false }}
    >
      <NearbyStack.Screen
        name="NearbyDrugStores"
        component={Nearby}
        options={{}}
      />
      <NearbyStack.Screen
        name="DrugStoreInfo"
        component={DrugStoreInfo}
        options={{}}
      />
    </NearbyStack.Navigator>
  );
}
