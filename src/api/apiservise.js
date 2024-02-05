import axios from 'axios';

const API_KEY = 'gMFV5zsVkr1RsTGu5zayG21kyWsln-3yEnrtTa3tAjQ';
axios.defaults.baseURL = `https://api.unsplash.com/photos/?client_id=${API_KEY}&`;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 10,
};

export const getPhotos = async (query) => {
  return await axios.get(`query=${query}`);
};