import FormularioItem from "../src/components/formularioItem/FormularioItem.js";
import {RecoilRoot} from "recoil"
import Lista from "../src/components/lista/index.js";
import TotalComprado from "../src/components/valorTotal/index";

export default function Home() {
  return (
    <>

    <RecoilRoot>
   

    <FormularioItem/>
    <TotalComprado/>
    <Lista/>
    

    </RecoilRoot>
    



    </>
  )
}
