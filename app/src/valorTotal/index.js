import { useRecoilValue } from "recoil"
import { ListaDeProdutos } from "../atomos/atomo"
import { useState } from "react"

export default function TotalComprado  (){

    let valor = 0 ; 


    
    const listaValor = useRecoilValue(ListaDeProdutos)

    const valorTotal = listaValor.map(item =>{
        
            
            valor  = valor + item.valorTotal
      
        
    })

    console.log(valor)

    return (

        <>
        
            <span>{valor}</span>


            <style
        
        </>


    )
}