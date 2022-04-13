import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter Component", () => {
  test("deve iniciar o titulo com o valor 0", () => {
    //verificando se o titulo começa com 0.
    render(<Counter />); //renderizando o componente

    const counterTitle = screen.getByText("0"); //obtendo o retorno de render, a documentação diz pra usar o screen.

    expect(counterTitle).toBeInTheDocument(); //a expectativa é de que o counterTitle esteja no meu documento.
  });

  test("deve conter a classe counter__title no titulo", () => {
    //verificando a classe counter_title.
    render(<Counter />); //renderizando o componente
    const counterTitle = screen.getByText("0"); //obtendo o retorno de render, a documentação diz pra usar o screen.

    expect(counterTitle).toHaveClass("counter__title"); //a expectativa é de que o counter_title exista.
  });

  test("não deve iniciar o titulo com as classe counter__title--increment e counter__title--decrement", () => {
    //verificando o estado da classe counter_title.
    render(<Counter />); //renderizando o componente
    const counterTitle = screen.getByText("0"); //obtendo o retorno de render, a documentação diz pra usar o screen.

    expect(counterTitle).not.toHaveClass("counter__title--increment");
    expect(counterTitle).not.toHaveClass("counter__title--decrement"); //a expectativa é de que ao renderizar não exista nenhum modificador.
  });

  test("deve conter um botão incrementar", () => {
    //verificando a existencia do botão descrito.
    render(<Counter />); //renderizando o componente
    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    }); //se eu não usar o name: ele vai parar assim que ele achar o primeiro button qualquer.

    expect(buttonIncrement).toBeInTheDocument(); //a expectativa é de que ao renderizar exista um botão increment.
  });

  test("deve conter um botão incrementar com as classes button e button--increment", () => {
    //verificando a existencia das duas classes no botão
    render(<Counter />); //renderizando o componente
    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    }); //se eu não usar o name: ele vai parar assim que ele achar o primeiro button qualquer.

    expect(buttonIncrement).toHaveClass("button"); //a expectativa é de que ao renderizar exista a class button.
    expect(buttonIncrement).toHaveClass("button--increment"); //a expectativa é de que ao renderizar exista a class button--increment.
  });

  test("deve conter um botão decrementar", () => {
    //verificando a existencia do botão descrito.
    render(<Counter />); //renderizando o componente
    const buttonDecrement = screen.getByRole("button", {
      name: /decrementar/i,
    }); //se eu não usar o name: ele vai parar assim que ele achar o primeiro button qualquer.

    expect(buttonDecrement).toBeInTheDocument(); //a expectativa é de que ao renderizar exista um botão decrement.
  });

  test("deve conter um botão decrementar com as classes button e button--decrement", () => {
    //verificando a existencia das duas classes no botão
    render(<Counter />); //renderizando o componente
    const buttonDecrement = screen.getByRole("button", {
      name: /decrementar/i,
    }); //se eu não usar o name: ele vai parar assim que ele achar o primeiro button qualquer.

    expect(buttonDecrement).toHaveClass("button"); //a expectativa é de que ao renderizar exista a class button.
    expect(buttonDecrement).toHaveClass("button--decrement"); //a expectativa é de que ao renderizar exista a class button--decrement.
  });

  test("deve incrementar + 1 ao clicar no botão incrementar", () => {
    render(<Counter />);
    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(screen.queryByText("1")).toBeNull();
    userEvent.click(buttonIncrement);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("deve decrementar - 1 ao clicar no botão decrementar", () => {
    render(<Counter />);
    const buttonDecrement = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(screen.queryByText("-1")).toBeNull();
    userEvent.click(buttonDecrement);
    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  test("deve adcionar a classe counter__title--increment no titulo, quando o valor for maior do que 0", () => {
    render(<Counter />);
    const buttonIncrement = screen.getByRole("button", {
      name: /incrementar/i,
    });

    expect(screen.queryByText("0")).not.toHaveClass(
      "counter__title--increment"
    );
    userEvent.click(buttonIncrement);
    expect(screen.getByText("1")).toHaveClass("counter__title--increment");
  });
  
  test("deve adcionar a classe counter__title--decrement no titulo, quando o valor for menor do que 0", () => {
    render(<Counter />);
    const buttonDecrement = screen.getByRole("button", {
      name: /decrementar/i,
    });

    expect(screen.queryByText("0")).not.toHaveClass(
      "counter__title--decrement"
    );
    userEvent.click(buttonDecrement);
    expect(screen.getByText("-1")).toHaveClass("counter__title--decrement");
  });
});
