import { Component, OnInit } from '@angular/core';
import { ProdutoService, ShoppingCartService } from 'src/app/shared/services';
import { Produto } from 'src/app/shared/models/produto.dto';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-lanca-pedido-balcao',
  templateUrl: './lanca-pedido-balcao.component.html',
  styleUrls: ['./lanca-pedido-balcao.component.css'],
  animations: [
    trigger('row', [
      state('ready', style({opacity: 1})),
      transition('void => ready', animate('300ms 0s ease-in', keyframes([
        style({opacity:0, transform: 'translateX(-30px)', offset:0}),
        style({opacity:0.8, transform: 'translateX(10px)', offset:0.8}),
        style({opacity:1, transform: 'translateX(0px)', offset:1})
      ]))),
      transition('ready => void', animate('300ms 0s ease-out', keyframes([
        style({opacity:1, transform: 'translateX(0px)', offset:0}),
        style({opacity:0.8, transform: 'translateX(-10px)', offset:0.2}),
        style({opacity:0, transform: 'translateX(30px)', offset:1})
      ])))
    ])
  ]
})
export class LancaPedidoBalcaoComponent implements OnInit {

  produtos: Produto[];
  rowState = 'ready';

  constructor(
              private produtoService: ProdutoService,
              private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.produtoService.listarProdutos()
      .subscribe(res => this.produtos =res);
  }

  addItem(produto: any){
    this.shoppingCartService.addItem(produto);
  }

  items(): any[] {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  clear(){
    this.shoppingCartService.clear()
  }

  removeItem(item: any){
    this.shoppingCartService.removeItem(item)
  }

}
