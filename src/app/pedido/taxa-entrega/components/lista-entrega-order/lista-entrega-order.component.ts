import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaxaEntrega } from 'src/app/shared/interfaces/taxa-entrega.dto';

@Component({
  selector: 'app-lista-entrega-order',
  templateUrl: './lista-entrega-order.component.html',
  styleUrls: ['./lista-entrega-order.component.css']
})
export class ListaEntregaOrderComponent implements OnInit {

  @Input() taxaEntrega: TaxaEntrega;
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitAddEvent(){
    this.add.emit(this.taxaEntrega);
  }

}
