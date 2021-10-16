import { Component, OnInit } from '@angular/core';
import { ProdutoDto } from 'src/app/shared';
import { ProdutoService } from 'src/app/shared/services';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/shared/models/produto.dto';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {

  produtos: ProdutoDto[];
  prods: any;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.listarProdutos().subscribe(res => this.produtos = res);
    console.log(this.produtos);
  }

  inativa(produtoId) {
    this.produtoService.inativaProduto(produtoId).subscribe(res => this.prods = res);
    console.log(produtoId);
  }

}
