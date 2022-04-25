import {useSetRecoilState } from "recoil";
import { ListaDeProdutos } from "../atom/atom";


export default function useEnviarDados(){

    const setListaDeProdutos = useSetRecoilState(ListaDeProdutos)


    return  (produtos) => {setListaDeProdutos(produtosAntigos => [...produtosAntigos , produtos])}

}