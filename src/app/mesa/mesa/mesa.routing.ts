import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraMesaComponent } from './components/cadastra-mesa/cadastra-mesa.component';
import { ListaMesaComponent } from 'src/app/restaurantes/lista-restaurantes/components/lista-mesa/lista-mesa.component';

export const MesaRoutes: Routes = [
	{
		path: 'cadastra-mesa',
		component: CadastraMesaComponent
	},
	{
		path: 'lista-mesas',
		component: ListaMesaComponent
	}
	
];

@NgModule({
  imports: [ RouterModule.forChild(MesaRoutes) ],
  exports: [ RouterModule ]
})
export class MesaRoutingModule {
}