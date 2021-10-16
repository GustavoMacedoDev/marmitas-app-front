import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutoComponent } from './components/cadastrar-produto/cadastrar-produto.component';
import { CadastroProdutoComponent } from './components/cadastro-produto.component';
import { ListarProdutoComponent } from './components/listar-produto/listar-produto.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';


export const CadastroProdutoRoutes: Routes = [
	{
		path: 'cadastro-produto',
		component: CadastroProdutoComponent,
		children: [
		  {
			path: '', 
			component: CadastrarProdutoComponent
		  }
		]
	},
	{
		path: 'lista-produto', component: ListarProdutoComponent
	},
	{
		path: 'produto/editar/:id', component: EditarProdutoComponent
	}
];

@NgModule({
  imports: [
  	RouterModule.forChild(CadastroProdutoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CadastroProdutoRoutingModule {
}