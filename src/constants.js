const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export const getSpotPhoto = (param, size) => {
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${size}&photoreference=${param}&key=${apiKey}`
   
  }
