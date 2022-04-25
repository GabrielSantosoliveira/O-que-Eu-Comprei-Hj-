import {useSetRecoilState} from 'recoil'
import {ListaDeProdutos} from '../../state/atom/atom'

export default function useRemoverItem() {
  const setListaDeProdutos = useSetRecoilState(ListaDeProdutos);

  return id => {
    
    setListaDeProdutos((produtosAntigos) =>
      produtosAntigos.filter((item) => item.id !== id)
    );
  };
}
