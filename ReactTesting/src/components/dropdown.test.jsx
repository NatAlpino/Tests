import { Dropdown } from "./dropdown";

import { screen, render, userEvent } from "../utils/exports-tests";

// 1- Dropdown começa fechado?
// 2- Quando clicado, o Dropdown mostra as opções do menu?
// 3- Quando selecionado um item do menu, o Dropdown fecha e indica qual opção foi selecionada?

const title = "Selecione o Pokémon";
const options = ["Bulbasaur", "Squirtle", "Charmeleon"];
/* As duas variáveis de cima é pra eu não precisar escrever os nomes durante o teste, pois eu posso cometer algum erro de escrita, 
assim além de escrever menos diminuo as chances de erro.
*/

describe("Dropdown", () => {
  // renderizando a aplicação (igual a original)

  //teste 1: Dropdown começa fechado?
  it("Should start closed", () => {
    render(
      <Dropdown
        title={title} //usando a variavel que eu criei.
        options={options} //aqui tbm, usando a variavel criada.
        onSelect={() => {}}
      />
    );
    //a expectativa é que um dos elementos quando buscado por texto, não esteja presente no documento
    //lembrando que este teste é pra ver se o dropdown começa fechado por isso esses itens não podem estar la ainda.
    expect(screen.queryByText(options[0])).not.toBeInDocument();
    expect(screen.queryByText(options[1])).not.toBeInDocument();
    expect(screen.queryByText(options[2])).not.toBeInDocument();
  });

  //teste 2: Quando clicado, o Dropdown mostra as opções do menu?
  it("Should show options when open", () => {
    render(
      <Dropdown
        title={title} //usando a variavel que eu criei.
        options={options} //aqui tbm, usando a variavel criada.
        onSelect={() => {}}
      />
    );
    userEvent.click(screen.getByRole("button", { name: title })); //passei o name do botão só a critério de exemplo, isso seria útil no caso de ter mais de um botão.

    //a expectativa é que quando o botão for acionado abra o menu de opções.
    expect(screen.getByText(options[0])).toBeInDocument();
    expect(screen.getByText(options[1])).toBeInDocument();
    expect(screen.getByText(options[2])).toBeInDocument();
  });

  //teste 3: Quando selecionado um item do menu, o Dropdown fecha e indica qual opção foi selecionada?
  it("Should signal an option was selected and close the dropdown", () => {
    const onSelect = jest.fn();
    render(
      <Dropdown
        title={title} //usando a variavel que eu criei.
        options={options} //aqui tbm, usando a variavel criada.
        onSelect={onSelect}
      />
    );
    userEvent.click(screen.getByRole("button")); //clicando no botão

    //opções aparecendo:
    expect(screen.getByText(options[0])).toBeInDocument();
    expect(screen.getByText(options[1])).toBeInDocument();
    expect(screen.getByText(options[2])).toBeInDocument();

    //clicando na opção 0 do array:
    userEvent.click(screen.getByText(options[0]));

    //a expectativa é que abra a opção clicada:
    expect(screen.getByText(options[0])).toHaveBeenCalledWith(options[1]);

    //expectatica de que feche o menu assim que a opção escolhida for clicada:
    expect(screen.queryByText(options[0])).not.toBeInDocument();
    expect(screen.queryByText(options[1])).not.toBeInDocument();
    expect(screen.queryByText(options[2])).not.toBeInDocument();
  });
});
