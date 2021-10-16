import { Component, OnInit, Input } from '@angular/core';
import { TaxaEntrega } from 'src/app/shared/interfaces/taxa-entrega.dto';
import { TaxaEntregaService } from 'src/app/shared/services/taxa-entrega.service';

@Component({
  selector: 'app-delivery-costs',
  templateUrl: './delivery-costs.component.html',
  styleUrls: ['./delivery-costs.component.css']
})
export class DeliveryCostsComponent implements OnInit {

  @Input() itemsValue: number;

  constructor() { }

  ngOnInit() {
  }

  total(): number {
    return this.itemsValue
  }


}
