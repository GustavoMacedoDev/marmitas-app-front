import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestauranteDetailComponent } from './components/restaurante-detail/restaurante-detail.component';
import { MenuComponent } from './components/restaurante-detail/menu/menu.component';
import { OpcaoAtendimentoComponent } from './components/opcao-atendimento/opcao-atendimento.component';
import { ListaMesaComponent } from './components/lista-mesa/lista-mesa.component';
import { LancamentoMesaComponent } from './components/lancamento-mesa/lancamento-mesa.component';


export const listaRestaurantesRotes: Routes = [
	{
		path: 'restaurants',
		component: RestaurantsComponent,
		
  },
  {
    path: 'restaurants/:id', component: RestauranteDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
    ]
  },
  {
    path: 'atendimento',
    component: OpcaoAtendimentoComponent
  },
  {
    path: 'lista-mesa',
    component: ListaMesaComponent
  },
  {
    path: 'lancamento-mesa/:id',
    component: LancamentoMesaComponent
  }
  
  
];

@NgModule({
  imports: [
  	RouterModule.forChild(listaRestaurantesRotes)
  ],
  exports: [
    RouterModule
  ]
})
export class ListaRestaurantesRoutingModule {
}