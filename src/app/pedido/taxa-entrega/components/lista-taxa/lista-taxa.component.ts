import { Component, OnInit } from '@angular/core';
import { TaxaEntrega } from 'src/app/shared/interfaces/taxa-entrega.dto';
import { TaxaEntregaService } from 'src/app/shared/services/taxa-entrega.service';

@Component({
  selector: 'app-lista-taxa',
  templateUrl: './lista-taxa.component.html',
  styleUrls: ['./lista-taxa.component.css']
})
export class ListaTaxaComponent implements OnInit {
  
  taxas: TaxaEntrega[];

  constructor(
              private taxaEntregaService: TaxaEntregaService
  ) { }

  ngOnInit(): void {
    this.taxaEntregaService.listarTaxas().subscribe(res => this.taxas = res);
  }

}
