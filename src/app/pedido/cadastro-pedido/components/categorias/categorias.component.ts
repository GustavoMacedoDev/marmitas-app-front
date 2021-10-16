import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from 'src/app/shared/interfaces/categoria.dto';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { ProdutoService } from 'src/app/shared/services';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: Categoria[];
  categoriasProdutos: Categoria[];
  @Input() categoria: Categoria;

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias()
      .subscribe(res => this.categorias = res);
  }

  listaProdutosPorCategoria(categoria: Categoria){
    let id = categoria.id;
    this.produtoService.listarProdutos()
    .subscribe(res => this.categoriasProdutos = res );
    console.log(this.categoriasProdutos);

  }

}
