import { listRef } from '../refs';

export let markup = '';

export function createMarkupList(data) {
  for (let i = 0; i < data.length; i++) {
    markup += `<li class="list_item">
        <img width="25px" height="25px" src="${data[i].flags.svg}">
        <p class="textCountry" >${data[i].name.common}</p>
      </li>`;
  }
  renderList(markup);
}

export function clearMarkup() {
  markup = '';
}

export function deleteMarkup() {
  listRef.innerHTML = '';
}

export function renderCountryInfo(data) {
  for (let i = 0; i < data.length; i++) {
    const lang = `${[data[i].languages].map(item => {
      return Object.values(item).join(', ');
    })}`;

    markup += `<li class="card_item">
    <div class="name_and_icon">
        <img class="icon" width="30px" height="30px" src="${data[i].flags.svg}">
          <p class="cardName" >${data[i].name.common}</p>
          </div>
        <p class="cardText" ><b>Capital</b>: ${data[i].capital}</p>
         <p class="cardText" ><b>Population</b>: ${data[i].population}</p>
          <p class="cardText" ><b>Languages</b>: ${lang}</p>
      </li>`;
  }

  renderList(markup);
}

export function renderList(markup) {
  listRef.innerHTML = markup;
  clearMarkup();
}
