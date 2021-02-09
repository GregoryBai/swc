export const BASE_URL = 'https://swapi.dev/api/';

export const STARSHIPS_URL = (param) => `${BASE_URL}starships/?search=${param}`;
export const PEOPLE_URL = (param) => `${BASE_URL}people/?search=${param}`;
export const PLANETS_URL = (param) => `${BASE_URL}planets/?search=${param}`;
export const FILMS_URL = (param) => `${BASE_URL}films/?search=${param}`;
export const SPECIES_URL = (param) => `${BASE_URL}species/?search=${param}`;
export const VEHICLES_URL = (param) => `${BASE_URL}vehicles/?search=${param}`;

export const ARRAY_OF_URLS = (param) => [
  STARSHIPS_URL(param),
  PEOPLE_URL(param),
  PLANETS_URL(param),
  FILMS_URL(param),
  SPECIES_URL(param),
  VEHICLES_URL(param),
];
