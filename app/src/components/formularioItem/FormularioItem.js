import { temas } from "../../../styles/temas.js";
import {useState} from "react"
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ListaDeProdutos } from "../../atomos/atomo.js";
import {v4 as uuidv4} from 'uuid'
export default function FormularioItem() {

  const[produto,setProduto] = useState("")
  const[valor,setValor] = useState("")
  const[quantidade,setQuantidade] = useState("")

  const setListaDeProdutos = useSetRecoilState(ListaDeProdutos)
  
  

  const calcularaPreco = () =>{ 
    
    const valorTotal = Number(quantidade*valor
    )
    return valorTotal
  }


  const enviarDados  = e => {
    e.preventDefault();

    

    const valorTotal = calcularaPreco()

    const id = uuidv4()
   

    const produtos = {produto,valor,quantidade,valorTotal,id};
    
    setListaDeProdutos(produtosAntigos => [...produtosAntigos , produtos])

    setProduto('')
    setQuantidade('')
    setValor('')


  }

  
  return (
    <>
      <form onSubmit={enviarDados}>



        <div>



          
        <label  htmlFor="Produto">Produto</label>

        <input
          type="text"
          placeholder="Produto"
          name="Produto"
          id="Produto"
          onChange={ e => setProduto(event.target.value)}
          value={produto}
          required
        />

        <label  htmlFor="valor">valor</label>

        <input
          type="number"
          placeholder="Valor Do Produto"
          name="valor"
          id="valor"
          onChange={ e=>setValor(e.target.value)}
          value={valor}
          required
        />

        <label  htmlFor="quantidade">quantidade</label>
        <input
          type="number"
          placeholder="quantidade do Produto"
          name="quantidade"
          id="quantidade"
          onChange={ e=>setQuantidade(e.target.value)}
          value={quantidade}
          required
        />


        <button  
        
        type="submit"
        > adicionar </button>


        </div>

      </form>


    <style jsx>

        {`
        
            form{
                width:100vw;
                box-sizing: border-box

            }
            div{
                display: flex;
                flex-direction: column;

            }

            label{
                font-size: 1.8rem;
                color:${temas.azul};
                font-weight: bold ;
            }
            input{
              font-size: 1.5rem;
              margin-bottom:1.5rem ;
              width: 90%;
            }

            button{
              font-size: 1.5rem;
              width: 90%;
              color:#efefef;
              background-color:${temas.azul};
              transition:all 1s ;
             
            }

            button:hover{
              cursor:pointer;
              background-color:${temas.azulEscuro};
              color:#ffffff;
            }
        
        
        `}

    </style>

    </>
  );
}
