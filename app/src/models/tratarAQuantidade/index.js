const guardarOValorTratadoDaQuantidade = (valorDoInputQuantidade, setQuantidadeFunc) => {



    const ValorEmNumero = Number(valorDoInputQuantidade).toFixed(0)

    setQuantidadeFunc(ValorEmNumero)






}

export default guardarOValorTratadoDaQuantidade