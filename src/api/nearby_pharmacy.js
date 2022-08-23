import Geolocation from 'react-native-geolocation-service';

function getPharmacyList() {
  // 마지막 위치정보 좌표를 카카오맵 API로 전송
  Geolocation.getCurrentPosition(async position => {
    try {
      // position.longitude   position.latitude
      let response = await fetch(
        'https://dapi.kakao.com/v2/local/search/category.json?category_group_code=PM9&radius=500&x=' +
          position.coords.longitude +
          '&y=' +
          position.coords.latitude +
          '&input_coord=WGS84',
        {
          headers: {
            Authorization: 'KakaoAK 33a8b02db1a0de6d37b4d7de43955e46',
          },
        },
      );
      // 카카오맵으로 부터 응답받은 데이터를 json으로 파싱
      const result_tmp = await response.json();

      // 약국의 이름과 정보 url만 추출하여 리스트에 저장
      const pharmacies = result_tmp.documents.map(res => ({
        name: res.place_name,
        url: res.place_url,
      }));
      return pharmacies;
    } catch (e) {
      console.log(e);
      return null;
    }
  });
}

export {getPharmacyList};
