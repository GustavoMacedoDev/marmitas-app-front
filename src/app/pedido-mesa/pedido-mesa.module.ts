import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoClienteComponent } from './pedido-cliente/components/pedido-cliente/pedido-cliente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ListaOpcoesPedidoComponent } from './pedido-cliente/components/lista-opcoes-pedido/lista-opcoes-pedido.component';
import { PratoPedidoClienteComponent } from './pedido-cliente/components/prato-pedido-cliente/prato-pedido-cliente.component';



@NgModule({
  declarations: [PedidoClienteComponent, ListaOpcoesPedidoComponent, PratoPedidoClienteComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class PedidoMesaModule { }
