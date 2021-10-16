import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/models/cart-item.model';
import { OrderService } from 'src/app/shared/services/order.service';
import { PedidoDto } from 'src/app/shared';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edita-pedido-balcao',
  templateUrl: './edita-pedido-balcao.component.html',
  styleUrls: ['./edita-pedido-balcao.component.css']
})
export class EditaPedidoBalcaoComponent implements OnInit {

  pedido: PedidoDto;
  pedidoId: string;

  constructor(
              private route: ActivatedRoute,
              private pedidoService: PedidoService
              ) { }

  ngOnInit(): void {
    this.pedidoId = this.route.snapshot.paramMap.get('id');
    this.obterDadosPedido();
    
  }

  obterDadosPedido() {
    this.pedidoService.listaPedidoByIdPedido(this.pedidoId).subscribe(res => this.pedido = res);
  }

  

}
