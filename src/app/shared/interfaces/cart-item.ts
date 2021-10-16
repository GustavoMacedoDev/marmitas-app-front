import { ProdutoDto } from '.';

export interface CartItem {
    quantidade: number;
    produto: ProdutoDto;
}