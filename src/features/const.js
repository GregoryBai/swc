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

export const getResultsObj = async (param) => {
  const starships = await fetch(STARSHIPS_URL(param)).then((resp) =>
    resp.json()
  );
  const people = await fetch(PEOPLE_URL(param)).then((resp) => resp.json());
  const planets = await fetch(PLANETS_URL(param)).then((resp) => resp.json());
  const films = await fetch(FILMS_URL(param)).then((resp) => resp.json());
  const species = await fetch(SPECIES_URL(param)).then((resp) => resp.json());
  const vehicles = await fetch(VEHICLES_URL(param)).then((resp) => resp.json());

  return {
    starships: starships.results,
    people: people.results,
    planets: planets.results,
    films: films.results,
    species: species.results,
    vehicles: vehicles.results,
  };
};
