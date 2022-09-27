import realm from '../schema/pill_search';

// 모든 알약 정보 출력
let getAllPills = () => {
  return realm.objects('Pill');
};

// 특정한 알약 정보 출력
let getSpecificPills = ITEM_NAME => {
  return realm.objects('Pill').filtered(`ITEM_NAME = "${ITEM_NAME}"`);
};

// 알약 추가 쿼리
let addPill = pillInformation => {
  realm.write(() => {
    realm.create('Pill', pillInformation);
  });
};

// 특정 알약 삭제
let deletePill = ITEM_NAME => {
  realm.write(() => {
    realm.delete(getSpecificPills(ITEM_NAME));
  });
};

// 모든 알약 정보 삭제
let deleteAll = () => {
  realm.write(() => {
    realm.delete(getAllPills());
  });
};

export {getAllPills, getSpecificPills, addPill, deletePill, deleteAll};
