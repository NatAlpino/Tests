import {
  initializeCityDataBase,
  clearCityDataBase,
  isCity,
  cities
} from "./Promise/promiseSetupAndTeardown";

beforeAll(() => {
  return initializeCityDataBase(); //vai rodar somente uma vez antes de cada teste
});

afterAll(() => {
  return clearCityDataBase(); //vai rodar somente uma vez depois de cada teste
});
//neste exemplo especifico nem precisaria do afterAll para limpar DataBase, pois DataBase e so um valor em memoria

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

test("has 2 cities", () => {
  expect(cities.length).toBe(2);
})
