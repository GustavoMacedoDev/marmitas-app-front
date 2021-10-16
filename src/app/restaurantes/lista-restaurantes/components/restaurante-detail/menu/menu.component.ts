import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/shared/services';
import { TaxaEntrega } from 'src/app/shared/interfaces/taxa-entrega.dto';
import { TaxaEntregaService } from 'src/app/shared/services/taxa-entrega.service';
import { ProdutoItem } from 'src/app/shared/models/produto-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<ProdutoItem[]>;
  taxa: Observable<TaxaEntrega[]>;

  constructor(
              private produtoService: ProdutoService, 
              private taxaService: TaxaEntregaService
              ) { }

  ngOnInit() {
    this.menu = this.produtoService.listarProdutos();
    this.taxa = this.taxaService.listarTaxas();
  }

  addMenuItem(item: ProdutoItem){
    console.log(item);
  }

}
