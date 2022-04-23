import { useRecoilValue, useSetRecoilState } from "recoil"

import { temas } from "../../../../styles/temas"
import { ListaDeProdutos } from "../../../atomos/atomo"

export default function Item ({item}){

    const setListaDeProdutos = useSetRecoilState(ListaDeProdutos)
    const valorLista  = useRecoilValue(ListaDeProdutos)


    const remover = e => {
        
        
        const id = e.target.value
        

        setListaDeProdutos(produtosAntigos => produtosAntigos.filter(item => item.id !== id))
    }
    
    
    return (
        
        
        <>
        
        
        <li>

        <div>

        <h2>nome: {item.produto}</h2>

        <span>quantidade: {item.quantidade} </span>
        <span>valor: {item.valorTotal.toFixed(2)}</span>
        <button value={item.id} onClick={remover}> remover </button>
        </div>


        </li>
        
        
        <style jsx>
            {

               `
               li{
                   padding: 1rem;
                   border-bottom: 1px solid;
                   box-sizing: border-box;
                   box-shadow: 4px 3px 7px rgba(0, 0, 0, 0.322);
                   margin-bottom: 1rem ;
               }
               
                h2{
                    font-size:1.7rem;
                    color:${temas.azulEscuro};
                    font-weight:bolder;



                }
                span{
                    font-size: 1.4rem;
                    margin-right: 2rem ;

                }
               
               `
            }
        </style>


        </>
        
        
        
        )
}