export default function calcularaPreco(quantidade, valor) {

    if(quantidade === undefined && valor === undefined ){
        alert('valor indefinido')
        return
    }

  const valorTotal = Number(quantidade * valor);

  return valorTotal;
}
