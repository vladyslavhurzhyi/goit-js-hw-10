export const BASE_URL = 'https://restcountries.com/v3.1/name/';
export const filreFild = '?fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
  return fetch(`${BASE_URL}${name}${filreFild}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
