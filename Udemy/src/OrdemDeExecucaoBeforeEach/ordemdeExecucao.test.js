/*
O beforeEach de nível superior é executado antes do beforeEach de dentro do describe.
Exemplo de ordem de execuçao dos hooks:
*/

beforeAll(() => console.log("1 - beforeAll"));
afterAll(() => console.log("12 - afterAll"));
beforeEach(() => console.log("2 e 6 - beforeEach"));
afterEach(() => console.log("4 e 10 - afterEach"));

test("", () => console.log("3 - test"));

describe("Scoped / Nested block", () => {
  beforeAll(() => console.log("5 - beforeAll"));
  afterAll(() => console.log("11 - afterAll"));
  beforeEach(() => console.log("7 - beforeEach"));
  afterEach(() => console.log("9 - afterEach"));

  test("", () => console.log("8 - test"));
});

// 1 - beforeAll
// 2 - beforeEach
// 3 - test
// 4 - afterEach
// 5 - beforeAll
// 6 - beforeEach
// 7 - beforeEach
// 8 - test
// 9 - afterEach
// 10 - afterEach
// 11 - afterAll
// 12 - afterAll

