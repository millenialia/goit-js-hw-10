import { fetchBreeds, fetchCatByBreed } from "./js/cat-api";

const selectEl = document.querySelector('.breed-select')
const catInfo = document.querySelector('.cat-info')
const errorEl = document.querySelector('.error')
const loaderEl = document.querySelector('.loader')

errorEl.classList.toggle('is-hidden')

selectEl.addEventListener('change', onChange)

fetchBreeds().then(renderCatOptions).catch(() => {
      errorEl.classList.toggle('is-hidden')
  }).finally(() => loaderEl.classList.toggle('is-hidden'));

function onChange(event) {
  loaderEl.classList.toggle('is-hidden')
  catInfo.innerHTML =''
  const breadID = event.target.value
  fetchCatByBreed(breadID)
    .then(breedArr => {
    const breedObj = breedArr[0].breeds[0];
    const breedImg = breedArr[0].url
    renderCatCard(breedImg, breedObj)
    selectEl.classList.remove('is-hidden')
    })
    .catch(() => {
      errorEl.classList.toggle('is-hidden')
      selectEl.classList.toggle('is-hidden')
    }).finally(() => {
      loaderEl.classList.toggle('is-hidden')
    });
}

function renderCatOptions(breeds){
    const markup = breeds.map((breed) => `<option value='${breed.id}'>${breed.name}</option>`).join('')
    selectEl.insertAdjacentHTML("beforeend", markup)
}

function renderCatCard(breedImg, breedObj) {
  const src = breedImg
  const name = breedObj.name
  const description = breedObj.description
  const temperament = breedObj.temperament

  const markupCard = `<img src=${src} class='img'>
  <ul class='list'>
  <li class='name'>${name}</li>
  <li class='description'>${description}</li>
  <li class='temperament'><span class='bold'>Temperament:</span> ${temperament}</li></ul>`

  catInfo.innerHTML += markupCard
}




