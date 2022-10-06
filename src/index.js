import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './js/fetchCountries';
import { inputRef } from './js/refs';
import { renderCountryInfo } from './js/markup/createMarkup';
import { deleteMarkup } from './js/markup/createMarkup';
import { createMarkupList } from './js/markup/createMarkup';

import './css/styles.css';

const DEBOUNCE_DELAY = 300;

inputRef.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(event) {
  let name = event.target.value.trim();

  if (name === '') {
    deleteMarkup();
    return;
  }

  fetchCountries(name)
    .then(data => {
      checkAmountCountry(data);
    })
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure('Oops, there is no country with that name.');
    });
}

// ______________________;___________;___________;___________;___________;//

function checkAmountCountry(data) {
  if (data.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    deleteMarkup();
    return;
  }
  if (data.length === 1) {
    renderCountryInfo(data);
    return;
  } else {
    createMarkupList(data);
    return;
  }
}

// ______________________;___________;___________;___________;___________;//
