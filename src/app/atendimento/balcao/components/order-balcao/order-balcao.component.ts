import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartItem } from 'src/app/shared/models/cart-item.model';
import { PedidoDto } from 'src/app/shared';

@Component({
  selector: 'app-order-balcao',
  templateUrl: './order-balcao.component.html',
  styleUrls: ['./order-balcao.component.css']
})
export class OrderBalcaoComponent implements OnInit {

  orderForm: FormGroup;

  constructor(
              private orderService: OrderService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.geraForm();
  }

  geraForm() {
    this.orderForm = this.formBuilder.group({
      observacao: this.formBuilder.control('', )
  	});
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }

  checkOrder(pedido: PedidoDto) {
    pedido.itens = this.cartItems()
      .map(x => {return {quantidade: x.quantidade, produto: {id: x.produtoItem.id}}});
    pedido.totalPedido = this.itemsValue();
   
    this.orderService.checkOrderBalcao(pedido)
      .subscribe( () => {
        this.router.navigate(['/lista-pedido-balcao'])
        this.orderService.clear()
    })
    console.log(pedido)
  }

}
