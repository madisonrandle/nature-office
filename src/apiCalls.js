const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export const getSpotsApi = async () => {
  try {
  const result = await fetch('https://fe-cors-proxy.herokuapp.com', {
  headers: {
    "Target-URL": `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=parks&location=39.750759, -104.996656&radius=50000&type=point_of_interest&key=${apiKey}`
  }
})
  if(!result.ok) {
    throw new Error(`Problem received status code of ${result.status}`)
  }

  const response = await result.json()
  console.log("GetSpotsApi Returns", response.results);
  return response
} catch(error) {
  window.alert(`Server Error. Its not your fault the error is: ${error}`)
}


}



export const getNorrisJoke = async () => {
  const result = await fetch('https://api.chucknorris.io/jokes/random')
  const response = await result.json()
  return response.value
}



