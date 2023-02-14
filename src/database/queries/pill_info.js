import schema from '../schema';

// 모든 알약 정보 출력
const getAllPills = () => {
  const result = schema.objects('pillInfo');
  return result;
};

// 특정한 알약 정보 출력
const getSpecificPills = ITEM_SEQ => {
  return schema.objects('pillInfo').filtered(`ITEM_SEQ = "${ITEM_SEQ}"`);
};

// 알약 추가 쿼리
const addPill = pillInformation => {
  schema.write(() => {
    schema.create('pillInfo', pillInformation);
  });
};

// 특정 알약 삭제
const deletePill = ITEM_SEQ => {
  schema.write(() => {
    schema.delete(getSpecificPills(ITEM_SEQ));
  });
};

// 모든 알약 정보 삭제
const deleteAll = () => {
  schema.write(() => {
    schema.delete(getAllPills());
  });
};

export {getAllPills, getSpecificPills, addPill, deletePill, deleteAll};
