
import { temas } from "../../../../src/styles/temas";
import useRemoverItem from '../../../../src/state/hooks/useRemoverItem'


export default function Item({ item }) {
 

    const remover = useRemoverItem ()

  return (
    <>
      <li>
        <div>
          <h2>nome: {item.produto}</h2>

          <span>quantidade: {item.quantidade} </span>
          <span>valor: {item.valorTotal.toFixed(2)}</span>
          <button value={item.id} onClick={e => remover(e.target.value)}>
            {" "}
            remover{" "}
          </button>
        </div>
      </li>

      <style jsx>
        {`
          li {
            padding: 1rem;
            border-bottom: 1px solid;
            box-sizing: border-box;
            box-shadow: 4px 3px 7px rgba(0, 0, 0, 0.322);
            margin-bottom: 1rem;
          }

          h2 {
            font-size: 1.7rem;
            color: ${temas.azulEscuro};
            font-weight: bolder;
          }
          span {
            font-size: 1.4rem;
            margin-right: 2rem;
          }
        `}
      </style>
    </>
  );
}
