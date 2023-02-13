import schema from '../schema';

// 설정값 추가
const addConfig = ({key, value}) => {
  schema.write(() => {
    schema.create('config', {key, value});
  });
};

// 모든 설정값 조회
const getAllConfig = () => {
  return schema.objects('config');
};

// 특정 설정값 조회
const getConfig = key => {
  return schema.objects('config').filtered(`key = "${key}"`);
};

// 설정값 업데이트
const updateConfig = ({key, value}) => {
  const config = getConfig(key);
  config.value = value;
};

// 모든 정보 삭제
const deleteAllConfig = () => {
  schema.write(() => {
    schema.delete(getAllConfig());
  });
};

export {addConfig, getAllConfig, getConfig, updateConfig, deleteAllConfig};
