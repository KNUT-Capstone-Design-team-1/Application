import realm from '../schema/pill_search';

// 모든 알약 정보 출력
let getAllPills = () => {
  return realm.objects('Pill');
};

// 특정한 알약 정보 출력
let getSpecificPills = _name => {
  return realm.objects('Pill').filtered(`name = "${_name}"`);
};

// 알약 추가 쿼리
let addPill = (_image, _name, _effect, _dosage, _caution, _take, _maker) => {
  realm.write(() => {
    realm.create('Pill', {
      image: _image,
      name: _name,
      effect: _effect,
      dosage: _dosage,
      caution: _caution,
      take: _take,
      maker: _maker,
    });
  });
};

// 특정 알약 삭제
let deletePill = _name => {
  realm.write(() => {
    realm.delete(getSpecificPills(_name));
  });
};

// 모든 알약 정보 삭제
let deleteAll = () => {
  realm.write(() => {
    realm.delete(getAllPills());
  });
};

export {getAllPills, getSpecificPills, addPill, deletePill, deleteAll};
