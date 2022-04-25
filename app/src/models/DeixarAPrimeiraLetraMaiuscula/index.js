export default function deixarMaiuscula(...text) {

    const textoCapitalizado = text.map((item) => {

        const str = item;

        const capitalized = str[0].toUpperCase() + str.substr(1);

        return capitalized;



    })

    return [...textoCapitalizado]

}









