import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import { PedidoDto } from 'src/app/shared';
import { PagamentoService } from 'src/app/shared/services/pagamento.service';
import { Faturamento } from 'src/app/shared/interfaces/faturamento.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalPedidos;
  faturamentos: Faturamento[];
  total: number;

  constructor(
              private pedidoService: PedidoService,
              private pagamentoService: PagamentoService
  ) { }

  ngOnInit(): void {
    this.buscaTotalPedidos();
    this.faturamento();
  }

  buscaTotalPedidos() {
    this.pedidoService.totaldePedidos().subscribe(res => this.totalPedidos = res);
  }

  faturamento() {
    this.pagamentoService.faturamento()
      .subscribe(res => { this.faturamentos = res;
    this.soma()});
  }

  soma() {
    this.total = this.faturamentos.reduce((a, b) => a + b.valor, 0);
  }
  
}
