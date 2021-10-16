import { Categoria } from './categoria.dto';

export class ProdutoDto {
    idProduto : string;
    nome : string;
    preco : number;
    categorias: Categoria[];
}