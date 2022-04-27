const { sum, inOneHour } = require("./index");

//o describe vem pra organizar meu test, no caso de ter mais testes eles vão ficar separados e mais organizados.
describe("match functions", () => {
    // beforeAll(() => {
    //     console.log("beforeAll");
    // })
    // beforeEach(() => {
    //     console.log("beforeEach");
    // })
    // afterAll(() => {
    //     console.log("afterAll");
    // })
    // afterEach(() => {
      ´ //     console.log("afterEach");
    // })
  it("soma de dois numeros", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

/* 
Quando eu uso o Date.now = 0 eu congelo a hora, fazendo assim com que eu 
possa testar sem mudar o código original.
*/
describe("time functions", () => {
    it("retorna o timestamp para uma hora à frente", () =>{
        const realDate = Date.bind(global.Date)
        global.Date.now = () => 0
        expect(inOneHour()).toBe(3600000)
        global.Date = realDate
    })
})
/*
Na linha 28 eu criei uma const para atribuir o valor de global.date como
um global.Date.now e na linha 31 eu atribuo o valor real pra que assim o 
valor só altere durante o teste, assim que acaba ele volta ao normal e assim
eu não corro o risco de alterar outro global.Date que eu usar em outro código
da aplicação.
*/