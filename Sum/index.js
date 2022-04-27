const sum = (a, b) => {
  return a + b;
};

/*
Agora vou testar um código que não é controlado, pois cada hora que eu 
rodar a resposta será diferente.
*/
const inOneHour = () => {
  const now = Date.now();
  const oneHourInMili = 1 * 60 * 60 * 1000;
  return now + oneHourInMili;
};

module.exports = { sum, inOneHour };
