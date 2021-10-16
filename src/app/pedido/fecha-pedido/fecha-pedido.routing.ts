import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OrderComponent } from './components/order/order.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { ListaPedidoComponent } from './components/lista-pedido/lista-pedido.component';
import { OrderMesaComponent } from './components/order-mesa/order-mesa.component';
import { OrderMesaConfirmationComponent } from './components/order-mesa-confirmation/order-mesa-confirmation.component';
import { ListaPedidoMesaComponent } from './components/lista-pedido-mesa/lista-pedido-mesa.component';
import { PagamentoMesaComponent } from './components/pagamento-mesa/pagamento-mesa.component';

export const FechaPedidoRoutes: Routes = [
	{
    path : 'order', component: OrderComponent
        
  },
  {
    path: 'order-mesa/:id', component: OrderMesaComponent
  },
  {
    path: 'order-confirmation', 
    component: OrderConfirmationComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'lista-pedido', component: ListaPedidoComponent
  },
  {
    path: 'lista-pedido/listar/:id', component: ListaPedidoComponent
  },
  {
    path: 'lista-pedido-mesa/listar/:id', component: ListaPedidoMesaComponent
  },
  {
    path: 'order-mesa-confirmation', component: OrderMesaConfirmationComponent
  },
  {
    path: 'pagamento-mesa/:id', component: PagamentoMesaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(FechaPedidoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FechaPedidoRoutingModule {
}