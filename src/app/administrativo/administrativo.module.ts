import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { AnaliticoPagamentoComponent } from './dashboard/components/analitico-pagamento/analitico-pagamento.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent, 
    AnaliticoPagamentoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdministrativoModule { }
