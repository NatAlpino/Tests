/*
Os describe isola blocos de testes e se o before estiver dentro dele vai rodar 
somentes nos testes do bloco. 
Pra rodar em todos os testes precisa estar fora do describe e neste caso vai rodar 
inclusive nos de dentro do bloco do describe.
*/

import {
  initializeCityDataBase,
  initializeFoodDataBase,
  isCity,
  isValidCityFoodPair,
} from "./describe";

//Como esse código esta fora de um describe, ele vai rodar em todos os testes.
beforeEach(() => {
  return initializeCityDataBase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

describe("matching cities to foods", () => {
  //Como esse código esta dentro de um describe, ele vai rodar somente dentro deste bloco de testes
  beforeEach(() => {
    return initializeFoodDataBase();
  });

  test("Vienna <3 veal", () => {
    expect(isValidCityFoodPair("Vienna", "Wiener Schnitzel")).toBe(true);
  });

  test("San Juan <3 plantains", () => {
    expect(isValidCityFoodPair("San Juan", "Mofongo")).toBe(true);
  });
});


