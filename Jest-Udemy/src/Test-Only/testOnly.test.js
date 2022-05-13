/*
Se um teste está falhando, uma das primeiras coisas a verificar deveria ser se o teste está falhando 
quando é o único teste que é executado. 
Para executar apenas um único teste com Jest, altere temporariamente o comando test para test.only:
*/

let globalVariable = "A"

test('Primeiro teste', () => { 
    expect(globalVariable).toBe("A");
    globalVariable = "B";
  }); //como o comando only está em algum outro teste deste arquivo, este teste que nao possui o comando nao sera executado
  
  test.only('Segundo teste', () => { 
    expect(globalVariable).toBe('A');
  }); //como o comando only está neste teste somente ele será executado