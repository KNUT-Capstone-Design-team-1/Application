import {ToastAndroid} from 'react-native';
import {
  getSpecificPills,
  addPill,
  deletePill,
} from '../database/queries/pill_search';

async function getPillInfo(props) {
  const {navigation} = props;

  isPillManaging = 1;

  const ref_info_tmp = await getSpecificPills(ref_name);
  p_data = ref_info_tmp.map(item => item);
  navigation.navigate('pillInformation');
}

function deletePillInfo(props) {
  const {navigation} = props;

  deletePill(p_data[0].name);
  ToastAndroid.showWithGravity(
    '삭제완료',
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );

  navigation.replace('pillStore');
}

function savePillInfo(props) {
  const In_DB = getSpecificPills(p_data[0].name);

  if (In_DB.toString() === '') {
    addPill(
      p_data[0].image,
      p_data[0].name,
      p_data[0].effect,
      p_data[0].dosage,
      p_data[0].caution,
      p_data[0].take,
      p_data[0].maker,
    );

    ToastAndroid.showWithGravity(
      '저장완료',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  } else {
    ToastAndroid.showWithGravity(
      '중복저장',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  }
}

export {getPillInfo, deletePillInfo, savePillInfo};
