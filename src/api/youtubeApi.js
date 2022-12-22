import axios from "axios";
import { Http } from "./core";

export const searchYoutube = () => {
  Http.get("/search?maxResults=25&q=방&part=snippet")
    .then(function (response) {
      return response.data.items.map((item) => ({ ...item, id: item.id.videoId }));
    })
    .catch(function (error) {
      // 에러 핸들링
      console.log(error);
    })
    .then(function () {
      // 항상 실행되는 영역
    });
};

export const fakeSearch = () => {
  return axios
    .get("/videos/search.json")
    .then((res) => res.data.items.map((item) => ({ ...item, id: item.id.videoId })));
};

export const fakeCategory = () => {
  return axios.get("/videos/category.json").then((res) => res.data.items);
};
