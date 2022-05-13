/*
Funções de simulação ( mocks em inglês ) permitem que você teste os links entre códigos, apagando a implementação 
real de uma função, capturando chamadas para a função (e os parâmetros passados nessas chamadas), capturar instâncias 
do construtor de funções quando instanciado com new, e permitindo configuração em tempo de teste de valores de retorno.

Existem duas maneiras de simular funções: Seja criando uma função simulada para usar no código de teste, ou escrevendo 
uma simulação manual para sobrescrever uma dependência de modulo.
*/
import forEach from "./mocks";

test("mockCallback", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  forEach([0, 1], mockCallback); //funcao de mock para a funcao forEach que esta no arquivo js

  //Aqui a função mock é chamada duas vezes
  expect(mockCallback.mock.calls.length).toBe(2);

  //Aqui o primeiro argumento da primeira chamada para a função foi 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  //Aqui o primeiro argumento da segunda chamada para a função foi 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  //O valor de retorno da primeira chamada para a função foi 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});

test("this", () => {
  const myMock1 = jest.fn();
  const a = new myMock1();
  a.name = "a";
  console.log(myMock1.mock.instances);
  // > [ <a> ]

  const myMock2 = jest.fn();
  const b = {};
  b.name = "b";
  const bound = myMock2.bind(b); //aqui o bind atribui o this da funcao myMock2 para ao objeto passado, no caso o "b"
  bound();
  console.log(myMock2.mock.contexts);
  // > [ <b> ]
});

test("someMockFunction", () => {
  const someMockFunction = jest.fn(() => "return value");

  someMockFunction("first arg", "second arg");

  //O primeiro argumento da primeira chamada para a função foi 'first arg'
  expect(someMockFunction.mock.calls[0][0]).toBe("first arg");

  //O segundo argumento da primeira chamada para a função foi 'second arg'
  expect(someMockFunction.mock.calls[0][1]).toBe("second arg");

  //O valor de retorno da primeira chamada para a função foi 'return value'
  expect(someMockFunction.mock.results[0].value).toBe("return value");

  const SomeMockConstructor = jest.fn();

  const a = new SomeMockConstructor();
  a.name = "test";
  const b = new SomeMockConstructor();

  //Esta função foi instanciada exatamente duas vezes
  expect(SomeMockConstructor.mock.instances.length).toBe(2);

  //O objeto retornado pela primeira instanciação desta função tinha uma propriedade `name` cujo valor foi definido como 'test'
  expect(SomeMockConstructor.mock.instances[0].name).toEqual("test");
});

test("returnValues", () => {
  const myMock = jest.fn();
  console.log(myMock());
  // > undefined

  myMock.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);

  console.log(myMock(), myMock(), myMock(), myMock());
  // > 10, 'x', true, true
});

test("filter", () => {
  const filterTestFn = jest.fn();

  //Fazendo o retorno simulado `true` para a primeira chamada, e `false` pra segunda chamada.
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const result = [11, 12].filter((num) => filterTestFn(num));

  console.log(result); // [11]

  console.log(filterTestFn.mock.calls[0][0]); // 11
  console.log(filterTestFn.mock.calls[1][0]); // 12
});

test("mockImplementation", () => {
  const myMockFn = jest.fn((cb) => cb(null, true));

  myMockFn((err, val) => console.log(val));
  // > true
});
