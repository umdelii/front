// 서버 연동 담당

import axios from "axios";
import type { Novel, NovelPut, PageRequestDTO } from "../types/book";

export const API_SERVER_HOST = "http://localhost:8080/api/novels";

// list 조회
export const getList = async (pageParams: PageRequestDTO) => {
  const { page, size, genre, keyword } = pageParams;

  const res = await axios.get(API_SERVER_HOST, {
    params: { page: page, size: size, genre: genre, keyword: keyword },
  });
  console.log("list ", res);

  return res.data;
};

// 하나 조회
export const getRow = async (id: string) => {
  const res = await axios.get(`${API_SERVER_HOST}/${id}`);
  console.log("도착 ", res);
  return res.data;
};

// update 2(available)
export const putAvailable = async (novelObj: NovelPut) => {
  const res = await axios.put(
    `${API_SERVER_HOST}/available/${novelObj.id}`,
    novelObj,
  );
  return res.data;
};

// update (available & genre)
export const putRow = async (novel: Novel) => {
  const res = await axios.put(`${API_SERVER_HOST}/edit/${novel.id}`, novel);
  return res.data;
};

// delete
export const deleteOne = async (id: number) => {
  const res = await axios.delete(`${API_SERVER_HOST}/${id}`);
  return res.data;
};

// create
export const postNovel = async (novel: Novel) => {
  const res = await axios.post(`${API_SERVER_HOST}/add`);
  return res.data;
};
