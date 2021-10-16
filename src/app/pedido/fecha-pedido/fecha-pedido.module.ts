import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './components/order/order.component';
import { DeliveryCostsComponent } from './components/delivery-costs/delivery-costs.component';
import { OrderItemsComponent } from './components/order/order-items/order-items.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from 'src/app/shared/input/input.component';
import { RadioComponent } from 'src/app/shared/radio/radio.component';
import { CadastroPedidoModule } from '../cadastro-pedido';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { WebDataRocksPivot } from 'src/app/webappdatarocks/webdatarocks.angular4';
import { ListaPedidoComponent } from './components/lista-pedido/lista-pedido.component';
import { OrderMesaComponent } from './components/order-mesa/order-mesa.component';
import { RevisaMesaComponent } from './components/order-mesa/revisa-mesa/revisa-mesa.component';
import { OrderMesaConfirmationComponent } from './components/order-mesa-confirmation/order-mesa-confirmation.component';
import { ListaPedidoMesaComponent } from './components/lista-pedido-mesa/lista-pedido-mesa.component';
import { PagamentoMesaComponent } from './components/pagamento-mesa/pagamento-mesa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    OrderComponent,
    DeliveryCostsComponent,
    OrderItemsComponent,
    OrderConfirmationComponent,
    WebDataRocksPivot,
    ListaPedidoComponent,
    OrderMesaComponent,
    RevisaMesaComponent,
    OrderMesaConfirmationComponent,
    ListaPedidoMesaComponent,
    PagamentoMesaComponent
  ],
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
    MatSelectModule,
    SharedModule
    
  ],
  exports: [MatAutocompleteModule]
  })
export class FechaPedidoModule { }
