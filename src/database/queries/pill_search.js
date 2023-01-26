import realm from '../schema/pill_search';

// 모든 알약 정보 출력
let getAllPills = () => {
  return realm.objects('pillInfo');
};

// 특정한 알약 정보 출력
let getSpecificPills = ITEM_SEQ => {
  return realm.objects('pillInfo').filtered(`ITEM_SEQ = "${ITEM_SEQ}"`);
};

// 알약 추가 쿼리
let addPill = pillInformation => {
  realm.write(() => {
    realm.create('pillInfo', pillInformation);
  });
};

// 특정 알약 삭제
let deletePill = ITEM_SEQ => {
  realm.write(() => {
    realm.delete(getSpecificPills(ITEM_SEQ));
  });
};

// 모든 알약 정보 삭제
let deleteAll = () => {
  realm.write(() => {
    realm.delete(getAllPills());
  });
};

export {getAllPills, getSpecificPills, addPill, deletePill, deleteAll};
