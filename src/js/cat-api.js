const APIKEY = 'live_zdyUG7wzdoiIwBMAkBsR7rwl1ZORjkzyrLyoKTZwasbOGwCUj7WxZGiroXrVaKPN'


function fetchBreeds() {
  return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${APIKEY}`).then(response => {
    return response.json();
  })

}

function fetchCatByBreed(breedId) {
  return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${APIKEY}`).then(response => {
    return response.json();
  })
}


export { fetchBreeds, fetchCatByBreed }



