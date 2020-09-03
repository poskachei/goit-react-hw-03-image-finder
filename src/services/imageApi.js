import axios from "axios";

const API_KEY = "17197765-c51078dcc877b1a19d5004a4f";

const fetchImageWithQuery = (searchQuery, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default {
  fetchImageWithQuery,
};
