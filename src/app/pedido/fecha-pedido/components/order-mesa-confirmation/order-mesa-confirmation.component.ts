import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import { PedidoDto } from 'src/app/shared';

@Component({
  selector: 'app-order-mesa-confirmation',
  templateUrl: './order-mesa-confirmation.component.html',
  styleUrls: ['./order-mesa-confirmation.component.css']
})
export class OrderMesaConfirmationComponent implements OnInit {

  pedidosAbertos: PedidoDto[];

  constructor(
              private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    this.listarPedidos();
  }

  listarPedidos() {
    this.pedidoService.listarMesas().subscribe(res => this.pedidosAbertos = res);
  }
}
