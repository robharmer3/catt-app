import axios from "axios";

const catApi = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
});

export function getBreeds() {
  return catApi.get("/breeds").then(({ data }) => {
    return data;
  });
}

export function getCatImg(id) {
  return catApi.get(`/images/search?breed_ids=${id}`).then(({ data }) => {
    return data[0];
  });
}
