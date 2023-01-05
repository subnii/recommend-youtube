import axios from "axios";
import { Http } from "./core";

export const getVideo = (param) => {
  const params = {
    part: "snippet,statistics",
    chart: "mostPopular",
    regionCode: "KR",
    maxResults: 25,
    ...param,
  };

  return Http.get("/videos", { params })
    .then((response) => {
      return response.data.items;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const searchVideo = (param) => {
  const params = {
    maxResults: 25,
    ...param,
  };

  return Http.get("/search", { params })
    .then((response) => {
      return response.data.items.map((item) => ({ ...item, id: item.id.videoId }));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCategory = () => {
  const params = {
    regionCode: "KR",
    hl: "ko_KR",
  };

  return Http.get("/videoCategories", { params })
    .then((response) => response.data.items)
    .catch((error) => {
      console.log(error);
    });
};

export const getChannels = (id) => {
  const params = {
    id,
    part: "snippet,statistics",
  };
  return Http.get("/channels", { params })
    .then((response) => response.data.items[0])
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
