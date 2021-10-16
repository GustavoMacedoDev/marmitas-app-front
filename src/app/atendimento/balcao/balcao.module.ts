import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancaPedidoBalcaoComponent } from './components/lanca-pedido-balcao/lanca-pedido-balcao.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderBalcaoComponent } from './components/order-balcao/order-balcao.component';
import { RevisaBalcaoComponent } from './components/order-balcao/revisa-balcao/revisa-balcao.component';
import { ItemsComponent } from './components/order-balcao/items/items.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ListaPedidosBalcaoComponent } from './components/lista-pedidos-balcao/lista-pedidos-balcao.component';
import { ImpressaoPedidoBalcaoComponent } from './components/impressao-pedido-balcao/impressao-pedido-balcao.component';
import { EditaPedidoBalcaoComponent } from './components/edita-pedido-balcao/edita-pedido-balcao.component';

@NgModule({
  declarations: [
    LancaPedidoBalcaoComponent,
    OrderBalcaoComponent,
    RevisaBalcaoComponent,
    ItemsComponent,
    ListaPedidosBalcaoComponent,
    ImpressaoPedidoBalcaoComponent,
    EditaPedidoBalcaoComponent
  ],
  imports: [
    CommonModule,
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
    MatSelectModule,
  ]
})
export class BalcaoModule { }
