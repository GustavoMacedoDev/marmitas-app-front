import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestauranteDetailComponent } from './components/restaurante-detail/restaurante-detail.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/restaurante-detail/menu/menu.component';
import { MenuItemComponent } from './components/restaurante-detail/menu-item/menu-item.component';
import { ShoppingCartComponent } from './components/restaurante-detail/shopping-cart/shopping-cart.component';
import { ListaEntregaOrderComponent } from 'src/app/pedido/taxa-entrega/components/lista-entrega-order/lista-entrega-order.component';
import { OpcaoAtendimentoComponent } from './components/opcao-atendimento/opcao-atendimento.component';
import { ListaMesaComponent } from './components/lista-mesa/lista-mesa.component';
import { LancamentoMesaComponent } from './components/lancamento-mesa/lancamento-mesa.component';
import { CestinhaComponent } from './components/opcao-atendimento/cestinha/cestinha.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    RestaurantComponent,
    RestaurantsComponent,
    RestauranteDetailComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    ListaEntregaOrderComponent,
    OpcaoAtendimentoComponent,
    ListaMesaComponent,
    LancamentoMesaComponent,
    CestinhaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule
  ]

})
export class ListaRestaurantesModule { }
