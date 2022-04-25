import { useRecoilValue } from "recoil"
import { ListaDeProdutos } from "../../state/atom/atom"
import Conteiner from "../styles/conteiner"
import Item from "./item"

export default function Lista (){

    const listaValor = useRecoilValue(ListaDeProdutos)


    return (


        <>

        <Conteiner>


        <section>


            <ul>
                {listaValor.map((item ,i)=>(
                    <Item key={i}  item={item} />
                ))}
            </ul>




        </section>


        </Conteiner>





            <style jsx>
                {`
                    section{
                        margin-top:2rem;
                        border-top: 1px solid black;
                        border-bottom: 1px solid black;
                        max-height: 490px ;
                        overflow: auto;
                    }

                `}
            </style>


        </>



        )
}
