import { temas } from "../../styles/temas";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useEnviarDados from "../../state/hooks/useEnviarDados";
import calcularaPreco from "../../models/calcularPrecoDoItem";
import Conteiner from "../styles/conteiner";

export default function FormularioItem() {
  const [produto, setProduto] = useState("");
  const [valor, setValor] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const setenviarDados = useEnviarDados();

  const enviarDados = (e) => {
    e.preventDefault();

    const valorTotal = calcularaPreco(quantidade, valor);

    const id = uuidv4();

    const produtos = { produto, valor, quantidade, valorTotal, id };

    setenviarDados(produtos);

    setProduto("");
    setQuantidade("");
    setValor("");
  };

  return (
    <>

    <Conteiner>

      <form onSubmit={enviarDados}>
        <div>
          <label htmlFor="Produto">Produto</label>

          <input
            type="text"
            placeholder="Produto"
            name="Produto"
            id="Produto"
            onChange={(e) => setProduto(event.target.value)}
            value={produto}
            required
          />

          <label htmlFor="valor">valor</label>

          <input
            type="number"
            placeholder="Valor Do Produto"
            name="valor"
            id="valor"
            onChange={(e) => setValor(e.target.value)}
            value={valor}
            required
          />

          <label htmlFor="quantidade">quantidade</label>
          <input
            type="number"
            placeholder="quantidade do Produto"
            name="quantidade"
            id="quantidade"
            onChange={(e) => setQuantidade(e.target.value)}
            value={quantidade}
            required
          />

          <button type="submit"> adicionar </button>
        </div>
      </form>
    </Conteiner>



      <style jsx>
        {`
          form {
            width: 100%;
            box-sizing: border-box;
            margin-bottom: 1rem;

          }
          div {
            display: flex;
            flex-direction: column;

            width: 90%;
            margin:auto;
          }

          label {
            font-size: 1.5rem;
            color: ${temas.azul};
            font-weight: bold;
            text-align: center

          }
          input {
            font-size: 1.5rem;
            width: 90%;
            margin:0 auto;
            margin-bottom:1rem;
          }

          button {
            font-size: 1.5rem;
            width: 90%;
            color: #efefef;
            background-color: ${temas.azul};
            border: 1px solid black;
            transition: all 1s;
            margin:0 auto;
            margin-bottom:1rem;
          }

          button:hover {
            cursor: pointer;
            background-color: ${temas.azulEscuro};
            color: #ffffff;
          }
        `}
      </style>
    </>
  );
}
