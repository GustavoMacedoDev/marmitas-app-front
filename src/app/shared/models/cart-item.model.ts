import { ProdutoItem } from './produto-item.model';

export class CartItem {
    constructor(public produtoItem: ProdutoItem,
                public quantidade: number = 1){}
  
    value(): number {
      return this.produtoItem.preco * this.quantidade;
    }
  }