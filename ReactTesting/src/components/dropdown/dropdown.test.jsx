import { Dropdown } from "./dropdown";

import { screen, render, userEvent } from "../../utils/exports-tests";

// 1- Dropdown começa fechado?
// 2- Quando clicado, o Dropdown mostra as opções do menu?
// 3- Quando selecionado um item da ByteLengthQueuingStrategy, o Dropdown fecha e indica qual opção foi selecionada?

describe("Dropdown", () => {
  // renderizando a aplicação (igual a original)
  it("Should start closed", () => {
    render(
      <Dropdown
        title="Selecione seu Pokémon Inicial"
        options={["Bulbasaur", "Squirtle", "Charmeleon"]}
        onSelect={() => {}}
      />
    );
    //a expectativa é que um dos elementos quando buscado por texto, não esteja presente no documento
    expect(screen.queryByText("Bulbasaur")).not.toBeInDocument();
    expect(screen.queryByText("Squirtle")).not.toBeInDocument();
    expect(screen.queryByText("Charmeleon")).not.toBeInDocument();
  });
});
