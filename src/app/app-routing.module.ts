import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoComponent } from './relatorios/pedido/pedido.component';
import { LoginComponent } from './autenticacao/login/components';


const routes: Routes = [
  { path : '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'pedido', component: PedidoComponent},
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
