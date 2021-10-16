import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarCategoriaComponent } from './components/cadastrar-categoria/cadastrar-categoria.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ListarCategoriaComponent } from './components/listar-categoria/listar-categoria.component';



@NgModule({
  declarations: [
    CadastrarCategoriaComponent,
    ListarCategoriaComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class CategoriaModule { }
