// To make API calls import axios
import axios from 'axios';
import Map from '../components/Map/Map';

// The code is copied from rapid restuarant endpoint - javascript-axios (Start)
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async ({ latitude, longitude, bounds }) => {
  // export const getPlacesData = async (sw, ne) => {
    alert(bounds._se.lat)
    try{
        // request
        const { data: { data } } = await axios.get(URL, {
          params: {
            bl_latitude: bounds._se.lat,
            tr_latitude: bounds._ne.lng,
            bl_longitude: bounds._ne.lat,
            tr_longitude: bounds._sw.lng,
          },
          headers: {
            'X-RapidAPI-Key': '217058c330msha2b1e9f0fae9ea5p139614jsna097a965ae28',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        }, []);
        
      // Ends here
        return data;
        
    } catch (error){
        console.log(error);
    }
    
}