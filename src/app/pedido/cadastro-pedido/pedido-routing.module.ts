import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListaLanchesComponent } from './components/lista-lanches/lista-lanches.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ListaLanchesCategoriaComponent } from './components/lista-lanches-categoria/lista-lanches-categoria.component';

export const PedidoRoutes: Routes = [
	
  {
    path: 'categorias/:id', component: ListaLanchesCategoriaComponent
  },
  {
    path : 'lista-categorias', component: CategoriasComponent
  }
  
];

@NgModule({
  imports: [
    RouterModule.forChild(PedidoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PedidoRoutingModule {
}