
import { temas } from "../../../../src/styles/temas";
import useRemoverItem from '../../../../src/state/hooks/useRemoverItem'
import deixarMaiuscula from "../../../models/DeixarAPrimeiraLetraMaiuscula";



export default function Item({ item }) {


    const remover = useRemoverItem ()
    const letras = deixarMaiuscula(item.produto)



  return (
    <>
      <li>
        <div className="conteiner">
            <div className="texto">

          <h2>{letras[0]}</h2>

          <span>quantidade: {item.quantidade} </span>
          <span>valor: {item.valorTotal.toFixed(2)}</span>

        </div>
        <div className="botoes">


        <button
        value={item.id}
        onClick={e => {
            remover(e.target.value)}
        }

            >
                remover</button>




        </div>

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
          .conteiner{
              display: flex;
              align-items: center;
              width: 100%;
              justify-content: space-around;
          }
          .texto{
            display:flex ;
            flex-direction: column;

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
          button {
                        font-size: 1.5rem;
                        width: 100%;
                        color: #efefef;
                        background-color: ${temas.azul};
                        border: 1px solid black;
                        transition: all 1s;
                        margin: 0 auto;
                        margin-bottom:0;
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
