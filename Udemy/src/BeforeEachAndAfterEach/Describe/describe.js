let cities = [];

function initializeCityDataBase() {
  return new Promise((resolve) => {
    setTimeout(() => {
      cities.push({ name: "Vienna" });
      cities.push({ name: "San Juan" });
      resolve();
    }, 100);
  });
}

function initializeFoodDataBase() {
  return new Promise((resolve) => {
    setTimeout(() => {
      cities[0].foods = ["Wiener Schnitzel"];
      cities[1].foods = ["Mofongo"];
      resolve();
    }, 100);
  });
}

function isCity(name) {
  return cities.map((city) => city.name).includes(name); //usando o .map para pegar a cidade pelo nome
}

function isValidCityFoodPair(name, food) {
  const city = cities.find((city) => city.name === name);

  if (!city || !city.foods) {
    //se ela nao existir ou nao conter comida dentro dela, vai retornar false
    return false;
  }
  return city.foods.includes(food); //ou vai retornar se o array da cidade contem comida
}

export {
  initializeCityDataBase,
  initializeFoodDataBase,
  isCity,
  isValidCityFoodPair
};
