import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { AnaliticoPagamentoComponent } from './dashboard/components/analitico-pagamento/analitico-pagamento.component';


export const AdministrativoRoutes: Routes = [
	{
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'analitico/:id', component: AnaliticoPagamentoComponent
  }
];

@NgModule({
  imports: [
  	RouterModule.forChild(AdministrativoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdministrativoRoutingModule {
}