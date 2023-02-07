import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async ({ latitude, longitude, bounds }) => {
  if (!bounds || !bounds.southWest || !bounds.northEast) {
    throw new Error('Invalid bounds object');
  }
  if (!bounds.southWest.lat || !bounds.southWest.lng || !bounds.northEast.lat || !bounds.northEast.lng) {
    throw new Error('Invalid bounds object properties');
  }
  try {
    const { data: { data } } = await axios.get(URL, {
      params: {
        bl_latitude: bounds.southWest.lat,
        tr_latitude: bounds.northEast.lat,
        bl_longitude: bounds.southWest.lng,
        tr_longitude: bounds.northEast.lng,
      },
      headers: {
        'X-RapidAPI-Key': '217058c330msha2b1e9f0fae9ea5p139614jsna097a965ae28',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
