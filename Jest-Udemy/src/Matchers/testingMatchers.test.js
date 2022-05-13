import Sum from "./testingMatchers";

test("Fazer a soma de dois numeros.", () => {
  expect(Sum(1, 2)).toBe(3); //toBe testa se o valor do resultado é o esperado.
});

test("Verificando se os valores de um objeto sao iguais.", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 }); //toEqual testa se o valor é realmente igual ao passado como parametro.
  //com o toBe o teste não passa, porque na realidade eles nao sao os mesmos objetos, ele so tem as mesmas propriedades
});

test("Verificando a manipulacao de um array.", () => {
  const data = [1];
  data.push(2);
  expect(data).toEqual([1, 2]); //toBe aqui tbm nao funciona.
});

test("Verificando se a manipulacao de um array esta correta.", () => {
  const data = [1];
  data.push(2);
  expect(data).not.toEqual([1, 2, 3]); //mesmo teste anterior, mas criado com o resultado errado para testar o .not
});

test("nulo", () => {
  const n = null;
  expect(n).toBeNull(); //verificando se o valor é de fato nulo(null)
  expect(n).not.toBeUndefined(); //verificando se o valor é de fato indefinido(Undefined)
  expect(n).toBeDefined(); //o contrario de undefined e testa positivo para null
  expect(n).not.toBeTruthy(); //corresponde a qualquer coisa que uma instrução if trata como verdadeira(true)
  expect(n).toBeFalsy(); //corresponde a qualquer coisa que uma instrução if trata como falsa(false)
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

//A maioria das formas de comparar numeros tem "matcher" equivalentes.
test("Verificando o resultado de dois mais dois", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  //toBe e toEqual são equivalentes para números
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

//para igualdade de ponto flutuante, use toBeCloseTo em vez de toEqual, porque você não quer um teste dependa de um pequeno erro de arredondamento.
//o toBeCloseTo testa se o valor é aproximado ao correto.
test("Adicionando numeros de ponto flutuante", () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3); //isso não vai funcionar por causa de um erro de arredondamento
  expect(value).toBeCloseTo(0.3); // Isso funciona.
});

//Podemos verificar strings contra expressões regulares com toMatch:
test("não existe I em team", () => {
  expect("team").not.toMatch(/I/);
});

test('mas existe "stop" em Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

//podemos verificar se um array contém um item específico usando toContain:
const shoppingList = [
  "fraldas",
  "kleenex",
  "sacos de lixo",
  "papel toalha",
  "leite",
];

test("a lista de compras tem leite nela", () => {
  expect(shoppingList).toContain("leite");
  expect(new Set(shoppingList)).toContain("leite");
});

//podemos testar se uma determinada função lança um erro quando é chamada, usando toThrow.
function compileAndroidCode() {
  throw new Error("você está usando o JDK errado");
}

test("compilando para android segue conforme esperado", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  //Você também pode usar a mensagem exata de erro ou uma regexp.
  expect(() => compileAndroidCode()).toThrow("você está usando o JDK errado");
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
