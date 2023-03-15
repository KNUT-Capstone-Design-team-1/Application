import axios from 'axios';

async function callNearbyPharmacyApi(position) {
  const url = `https://dapi.kakao.com/v2/local/search/category.json?category_group_code=PM9&radius=500&x=${position.coords.longitude}&y=${position.coords.latitude}&input_coord=WGS84`;

  const response = await axios(url, {
    headers: {Authorization: 'KakaoAK 33a8b02db1a0de6d37b4d7de43955e46'},
    timeout: 30000,
  });

  return response.data;
}

export {callNearbyPharmacyApi};
