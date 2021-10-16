import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CadastraTaxaComponent } from './components/cadastra-taxa/cadastra-taxa.component';
import { ListaTaxaComponent } from './components/lista-taxa/lista-taxa.component';

export const TaxaEntregaRoutes: Routes = [
	{
        path: 'cadastra-taxa', component: CadastraTaxaComponent
  },
  {
    path: 'lista-taxa', component: ListaTaxaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(TaxaEntregaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TaxaEntregaRoutingModule {
}