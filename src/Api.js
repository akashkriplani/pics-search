import axios from 'axios';

const searchImages = async (searchTerm) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID NmtwuJVtWW1mhVK18ZB3p4udWOrKIVyqpWApZr4nY0U'
    },
    params: {
      query: searchTerm
    }
  });

  return response.data.results;
};

export default searchImages;
