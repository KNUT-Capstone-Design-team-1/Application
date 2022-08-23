import {getSpecificPills} from '../database/queries/pill_search';

// 선택한 알약의 정보 출력
async function getPillInfo(props) {
  const {navigation} = props;

  pill_managing_sw = 1;

  // DBMS로 부터 선택한 알약에 대한 정보 로드
  const ref_info_tmp = await getSpecificPills(ref_name);

  // 전역 변수인 알약 정보에 DB로 부터 받은 특정한 알약의 데이터를 Mapping
  p_data = ref_info_tmp.map(item => item);

  // 알약 정보화면으로 이동
  navigation.navigate('pillInformation');
}

export {getPillInfo};
