import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule, LoginRoutingModule, CadastroPjModule, CadastroPjRoutingModule, CadastroPfModule, CadastroPfRoutingModule } from './autenticacao';
import { PedidoRoutingModule, CadastroPedidoModule } from './pedido';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { registerLocaleData } from '@angular/common';

import localePtBr from '@angular/common/locales/pt';
import { FechaPedidoModule } from './pedido/fecha-pedido/fecha-pedido.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FechaPedidoRoutingModule } from './pedido/fecha-pedido/fecha-pedido.routing';
import { CadastroProdutoModule } from './produto/cadastro-produto/cadastro-produto.module';
import { CadastroProdutoRoutingModule } from './produto/cadastro-produto/cadastro-produto-routing.module';
import { RestaurantsComponent } from './restaurantes/lista-restaurantes/components/restaurants/restaurants.component';
import { ListaRestaurantesModule } from './restaurantes/lista-restaurantes/lista-restaurantes.module';
import { ListaRestaurantesRoutingModule } from './restaurantes/lista-restaurantes/lista-restaurantes-routing';
import { PedidoComponent } from './relatorios/pedido/pedido.component';
import { MesaModule } from './mesa/mesa/mesa.module';
import { MesaRoutingModule } from './mesa/mesa/mesa.routing';
import { TaxaEntregaModule } from './pedido/taxa-entrega/taxa-entrega.module';
import { TaxaEntregaRoutingModule } from './pedido/taxa-entrega/taxa-entrega.routing';
import { CategoriaRoutingModule } from './categoria/categoria/categoria.routing';
import { CategoriaModule } from './categoria/categoria/categoria.module';
import { BalcaoModule } from './atendimento/balcao/balcao.module';
import { BalcaoRoutingModule } from './atendimento/balcao/balcao-routing.module';
import { PedidoMesaModule } from './pedido-mesa/pedido-mesa.module';
import { PedidoMesaRoutingModule } from './pedido-mesa/pedido-mesa-routing.module';
import { AdminGuard } from './autenticacao/admin/services/admin-guard.service';
import { AdministrativoModule } from './administrativo/administrativo.module';
import { AdministrativoRoutingModule } from './administrativo/administrativo-routing.module';

registerLocaleData(localePtBr);


@NgModule({
  declarations: [ 
    AppComponent, PedidoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    CadastroPedidoModule,
    PedidoRoutingModule,
    SharedModule,
    FontAwesomeModule,
    FechaPedidoModule,
    FechaPedidoRoutingModule,
    CadastroPfModule,
    CadastroPfRoutingModule,
    CadastroProdutoModule,
    CadastroProdutoRoutingModule,
    ListaRestaurantesModule,
    ListaRestaurantesRoutingModule,
    MesaModule,
    MesaRoutingModule,
    TaxaEntregaModule,
    TaxaEntregaRoutingModule,
    CategoriaModule,
    CategoriaRoutingModule,
    BalcaoModule,
    BalcaoRoutingModule,
    PedidoMesaModule,
    PedidoMesaRoutingModule,
    AdministrativoModule,
    AdministrativoRoutingModule,
    
    AppRoutingModule
  ],
  providers: [{ provide : LOCALE_ID, useValue : 'pt-BR'}, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
