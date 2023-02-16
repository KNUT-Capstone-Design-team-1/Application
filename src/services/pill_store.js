import {ToastAndroid} from 'react-native';
import {PillInfoQuery} from '../database/queries';
const {getSpecificPills, addPill, deletePill} = PillInfoQuery;

function deletePillInfo(props) {
  const {navigation, ITEM_SEQ} = props;

  deletePill(ITEM_SEQ);
  ToastAndroid.showWithGravity(
    '삭제완료',
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );

  navigation.replace('pillStore');
}

function savePillInfo(props) {
  const {pillDetail} = props;
  const In_DB = getSpecificPills(pillDetail.ITEM_SEQ);

  if (In_DB.toString() === '') {
    addPill(pillDetail);

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

export {deletePillInfo, savePillInfo};
