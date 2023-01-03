import axios from "axios";
import { Http } from "./core";

export const getHotVideo = () => {
  return Http.get("/videos?part=statistics&chart=mostPopular&regionCode=KR")
    .then((response) => {
      return response.data.items.map((item) => ({ ...item, id: item.id.videoId }));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const searchYoutube = () => {
  return Http.get("/search?maxResults=25")
    .then((response) => {
      return response.data.items.map((item) => ({ ...item, id: item.id.videoId }));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCategory = () => {
  return Http.get("/videoCategories?regionCode=KR&hl=ko_KR")
    .then((response) => response.data.items)
    .catch((error) => {
      console.log(error);
    });
};

export const fakeHotVideo = () => {
  return axios.get("/datas/hotvideo.json").then((res) => {
    return res.data.items;
  });
};

export const fakeChannel = () => {
  return axios.get("/datas/channel.json").then((res) => {
    return res.data.items[0];
  });
};

export const fakeConnect = () => {
  return axios.get("/datas/connect.json").then((res) => {
    return res.data.items.map((item) => ({ ...item, id: item.id.videoId }));
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
