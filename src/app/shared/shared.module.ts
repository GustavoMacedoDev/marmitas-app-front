import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './directives/mascara.directive';
import { ShoppingCartService } from './services';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { ClienteService } from './services/cliente.service';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
  declarations: [
    MascaraDirective,
    RadioComponent,
    InputComponent,
    PhonePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MascaraDirective, RadioComponent, InputComponent, PhonePipe
  ],
  providers: [ShoppingCartService, ClienteService]
})
export class SharedModule { }
