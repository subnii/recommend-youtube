import axios from "axios";
import { Http } from "./core";

export const searchYoutube = () => {
  return Http.get("/search?maxResults=25&part=snippet")
    .then((response) => {
      return response.data.items.map((item) => ({ ...item, id: item.id.videoId }));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCategory = () => {
  return Http.get("/videoCategories?part=snippet&regionCode=KR&hl=ko_KR")
    .then((response) => response.data.items)
    .catch((error) => {
      console.log(error);
    });
};

export const fakeSearch = () => {
  return axios.get("/datas/search.json").then((res) => {
    return res.data.items.map((item) => ({ ...item, id: item.id.videoId }));
  });
};

export const fakeCategory = () => {
  return axios.get("/datas/category.json").then((res) => res.data.items);
};
