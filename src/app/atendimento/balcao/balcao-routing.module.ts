import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancaPedidoBalcaoComponent } from './components/lanca-pedido-balcao/lanca-pedido-balcao.component';
import { OrderBalcaoComponent } from './components/order-balcao/order-balcao.component';
import { ListaPedidosBalcaoComponent } from './components/lista-pedidos-balcao/lista-pedidos-balcao.component';
import { ImpressaoPedidoBalcaoComponent } from './components/impressao-pedido-balcao/impressao-pedido-balcao.component';
import { EditaPedidoBalcaoComponent } from './components/edita-pedido-balcao/edita-pedido-balcao.component';


export const BalcaoRoutes: Routes = [
	{
		path: 'lanca-pedido-balcao',
		component: LancaPedidoBalcaoComponent
  },
  {
    path: 'order-balcao',
    component: OrderBalcaoComponent
  },
  {
    path: 'lista-pedido-balcao',
    component: ListaPedidosBalcaoComponent
  },
  {
    path: 'impressao-balcao/:id',
    component: ImpressaoPedidoBalcaoComponent
  },
  {
    path: 'edita-pedido-balcao/:id',
    component: EditaPedidoBalcaoComponent
  }  
];

@NgModule({
  imports: [
  	RouterModule.forChild(BalcaoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BalcaoRoutingModule {
}