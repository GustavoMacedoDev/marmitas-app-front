import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { Categoria } from 'src/app/shared/interfaces/categoria.dto';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent implements OnInit {

  categorias: Categoria[];

  constructor(
              private categoriaService: CategoriaService
              ) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias()
      .subscribe(res => this.categorias = res);
  }

}
