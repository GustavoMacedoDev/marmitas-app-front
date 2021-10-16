import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListaLanchesComponent } from './components/lista-lanches/lista-lanches.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ListaLanchesCategoriaComponent } from './components/lista-lanches-categoria/lista-lanches-categoria.component';


@NgModule({
  declarations: [
    ListaLanchesComponent,
    CategoriasComponent,
    ListaLanchesCategoriaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule,
    FontAwesomeModule,
  ]
})
export class CadastroPedidoModule { }
