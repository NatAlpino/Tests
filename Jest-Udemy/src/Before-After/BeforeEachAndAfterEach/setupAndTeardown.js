let cities = [];

function initializeCityDataBase() {
    cities.push("Vienna");
    cities.push("San Juan");
}

function clearCityDataBase() {
    cities = [];
}

function isCity(name) {
    return cities.includes(name);
}

export { initializeCityDataBase, clearCityDataBase, isCity, cities };