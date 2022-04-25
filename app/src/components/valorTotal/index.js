import { useRecoilValue } from "recoil";

import calcularPrecoTotalDaLista from "../../models/calcularprecoTotalDaLista";
import { ListaDeProdutos } from "../../state/atom/atom";

export default function TotalComprado() {
  const arrayProdutos  = useRecoilValue(ListaDeProdutos) 
  const valor = calcularPrecoTotalDaLista(arrayProdutos)

  return (
    <>
      <div>
        <span>Valor: R${valor.toFixed(2)}</span>
      </div>

      <style jsx>
        {`
          span {
            font-size: 1.6rem;
            font-weight: bolder;
          }

          div {
            margin-top: 1rem;
            margin-bottom: 1rem;
            width: 100vw;
            padding: 1rem;
            border-top: 1px solid black;
            border-bottom: 1px solid black;
            box-shadow: 5px 3px 9px rgba(0, 0, 0, 0.377);
          }
        `}
      </style>
    </>
  );
}
