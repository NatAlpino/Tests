let cities = [];

function initializeCityDataBase() {
  return new Promise((resolve) => {
    setTimeout(() => {
      cities.push("Vienna");
      cities.push("San Juan");
      resolve();
    }, 100);
  });
}

function clearCityDataBase() {
    return new Promise((resolve) => {
      setTimeout(() => {
        cities = [];
        resolve();
      }, 100);
    });
  }

function isCity(name) {
  return cities.includes(name);
}

export { initializeCityDataBase, clearCityDataBase, isCity, cities };
