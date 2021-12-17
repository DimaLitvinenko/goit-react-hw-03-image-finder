import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '24448701-489f6770e4002eca234b0d01a';

export default async function fetchImages(searchQuery, page) {
   const searchParams = new URLSearchParams({
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      q: searchQuery,
      page: page,
      per_page: 12,
   });

   return await axios.get(`${BASE_URL}?${searchParams}`).then(response => {
      return response.data.hits;
   });
}

fetchImages.propTypes = {
   searchQuery: PropTypes.string,
   page: PropTypes.number,
};
