import {
    initializeCityDataBase,
    clearCityDataBase,
    isCity,
    cities
  } from "./promiseSetupAndTeardown";
  
  beforeEach(() => {
    return initializeCityDataBase(); //vai rodar antes de cada um dos testes
  });
  
  afterEach(() => {
    return clearCityDataBase(); //vai rodar depois de cada um dos testes
  });
  
  test("city database has Vienna", () => {
    expect(isCity("Vienna")).toBeTruthy();
  });
  
  test("city database has San Juan", () => {
    expect(isCity("San Juan")).toBeTruthy();
  });
  
  test("has 2 cities", () => {
      expect(cities.length).toBe(2);
  })
  