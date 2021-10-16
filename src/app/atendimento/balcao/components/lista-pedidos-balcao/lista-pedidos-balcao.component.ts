import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import { PedidoDto } from 'src/app/shared';
import { ListaPedido } from 'src/app/shared/interfaces/lista-pedido.dto';

@Component({
  selector: 'app-lista-pedidos-balcao',
  templateUrl: './lista-pedidos-balcao.component.html',
  styleUrls: ['./lista-pedidos-balcao.component.css']
})
export class ListaPedidosBalcaoComponent implements OnInit {

  pedidos: ListaPedido[];

  constructor(
              private pedidoService: PedidoService
              ) { }

  ngOnInit(): void {
    this.buscaPedidosBalcao();

  }

  buscaPedidosBalcao() {
    this.pedidoService.listarPedidosAtivosPorOpcao(1).subscribe(res => this.pedidos = res);
  }

}
