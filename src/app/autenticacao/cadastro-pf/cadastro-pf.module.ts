import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarPfComponent } from './components';
import { CadastroPfComponent } from './components/cadastro-pf.component';
import { ListaPfComponent } from './components/lista-pf/lista-pf.component';
import { PhonePipe } from 'src/app/shared/pipes/phone.pipe';
import { EditaPfComponent } from './components/edita-pf/edita-pf.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CadastrarPfComponent, CadastroPfComponent, ListaPfComponent, EditaPfComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    SharedModule
  ]
})
export class CadastroPfModule { }
