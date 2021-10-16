import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarCategoriaComponent } from './components/cadastrar-categoria/cadastrar-categoria.component';
import { ListarCategoriaComponent } from './components/listar-categoria/listar-categoria.component';


export const CategoriaRoutes: Routes = [
	{
    path: 'cadastra-categoria', component: CadastrarCategoriaComponent
  },
  {
    path: 'lista-categoria', component: ListarCategoriaComponent
  }
];

@NgModule({
  imports: [
  	RouterModule.forChild(CategoriaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CategoriaRoutingModule {
}