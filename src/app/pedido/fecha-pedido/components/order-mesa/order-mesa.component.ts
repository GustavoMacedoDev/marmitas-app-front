import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { CartItem } from 'src/app/shared/models/cart-item.model';
import { PedidoDto } from 'src/app/shared';
import { Router, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MesaDto } from 'src/app/shared/interfaces/mesa.dto';
import { MesaService } from 'src/app/shared/services/mesa.service';
import { OpcaoAtendimento } from 'src/app/shared/interfaces/opcao-atendimento.dto';

@Component({
  selector: 'app-order-mesa',
  templateUrl: './order-mesa.component.html',
  styleUrls: ['./order-mesa.component.css']
})
export class OrderMesaComponent implements OnInit {

  orderForm: FormGroup;
  mesa: MesaDto;
  option: OpcaoAtendimento;

  constructor(
              private orderService: OrderService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private mesaService: MesaService
  ) { }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      observacao: this.formBuilder.control('', )
  	});
    let idMesa = this.route.snapshot.params['id'];
    this.buscaMesaPorId(idMesa);
   
  }

  buscaMesaPorId(idMesa) {
    this.mesaService.buscaMesaPorId(idMesa).subscribe(res => this.mesa = res);
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

  checkOrder(pedido: PedidoDto){
    pedido.itens = this.cartItems()
      .map(x => {return {quantidade: x.quantidade, produto: {id: x.produtoItem.id}}});
    pedido.mesa = this.mesa;
    
    pedido.opAtendimento = this.option;
    this.orderService.checkOrderMesa(pedido)
      .subscribe( (orderId: string) => {
        this.router.navigate(['/order-mesa-confirmation'])
        this.orderService.clear()
    });

    console.log(pedido)
  }

}
