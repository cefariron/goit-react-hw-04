import axios from "axios";

const API_KEY = "gMFV5zsVkr1RsTGu5zayG21kyWsln-3yEnrtTa3tAjQ";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const getPhotos = async (query, page) => {
  const response = await axios({
    url: `/search/photos`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept-Version": "v1",
      Authorization: `Client-ID ${API_KEY}`,
    },
    params: {
      page,
      query,
      per_page: 20,
    },
  });

  return response.data;
};
