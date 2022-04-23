import { useRecoilValue } from "recoil";
import { ListaDeProdutos } from "../atomos/atomo";

export default function TotalComprado() {
  let valor = Number(0.00);

  const listaValor = useRecoilValue(ListaDeProdutos);  

  const valorTotal = listaValor.map((item) => {
    valor = valor + item.valorTotal;
  });

  console.log(valor);

  return (
    <>
      <div>
        <span>Valor: R${valor.toFixed(2)}</span>
      </div>

      <style jsx>
        {` 
                
                
                span{

                    font-size: 1.6rem;
                    font-weight: bolder;
                    
}


                

                div{
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
