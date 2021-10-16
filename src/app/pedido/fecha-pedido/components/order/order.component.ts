import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { OrderService } from 'src/app/shared/services/order.service';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/shared/models/cart-item.model';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { MatSelect } from '@angular/material/select';
import { FormaPagamento } from 'src/app/shared/models/forma-pagamento.model';
import { FormaPagamentoService } from 'src/app/shared/services/forma-pagamento.service';
import { PedidoDto } from 'src/app/shared';
import { OpcaoAtendimento } from 'src/app/shared/interfaces/opcao-atendimento.dto';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  clientes: Cliente[];
  cliente: Cliente;
  @ViewChild(MatSelect) matSelect: MatSelect;
  pedido: PedidoDto;
  opcaoAtendimento: OpcaoAtendimento;
  trocoInput: number;
  valorPagoInput: number;
  valorPg: number;
  fPagamento: any;

  formasPagamento: FormaPagamento[];

  constructor(private orderService: OrderService,
              private router: Router,
              private formBuilder: FormBuilder,
              private clienteService: ClienteService,
              private formaPagamentoService: FormaPagamentoService) { }

  ngOnInit() {
    this.listarClientes();
    this.listarFormasPagamento();
    this.gerarForm();
      
  }

  gerarForm() {
    this.orderForm = this.formBuilder.group({
  		cliente: ['', [Validators.required]],
      formaPagamento: this.formBuilder.control('', [Validators.required]),
      valorPago: this.formBuilder.control('', [Validators.required]),
      observacao: this.formBuilder.control('', )
  	});
  }


  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  }

  clienteValue(): Cliente{
    return this.cliente;
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
    pedido.totalPedido = this.itemsValue();
   
    this.orderService.checkOrder(pedido)
      .subscribe( () => {
        this.router.navigate(['/order-confirmation'])
        this.orderService.clear()
    })
    console.log(pedido)
  }

  listarClientes() {
    return this.clienteService.listarClientes().subscribe(res => this.clientes = res);
  }

  listarFormasPagamento(){
    return this.formaPagamentoService.listarFormasPagamento()
    .subscribe(res => this.formasPagamento = res);
    
  }

}