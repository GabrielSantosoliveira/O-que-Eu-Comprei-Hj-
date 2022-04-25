export default function calcularPrecoTotalDaLista(array) {
  let valor = Number(0.0);
   
   array.map((item) => {
    valor = valor + item.valorTotal;
  });

  return valor;
}
