import { Component, OnInit } from '@angular/core';
import 'jspdf-autotable';
import * as jsPdf from 'jspdf';
import * as $ from "jquery";

import { ProdutoDto } from 'src/app/shared';
import { ProdutoService } from 'src/app/shared/services';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  
  produtos: ProdutoDto[];

  constructor(private produtoService: ProdutoService) {

  }

  ngOnInit(): void {
    this.produtoService.listarProdutos().subscribe(res => this.produtos = res);
   
  }
  
  head = [['ID', 'Country', 'Rank', 'Capital']];
  data = [
    [1, 'Finland', 7.632, 'Helsinki']
    
  ];

 

  createPdf() {
    console.log("produtos" + this.produtos);
    var doc = new jsPdf();
 
    doc.setFontSize(18);
    doc.text('My PDF Table', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);
 
 
    (doc as any).autoTable({
      head: this.head,
      body: this.data,
      theme: 'plain',
      didDrawCell: data => {
        console.log(data.column.index)
      }
    })
 
    // Open PDF document in new tab
    doc.output('dataurlnewwindow')
 
    // Download PDF document  
   // doc.save('table.pdf');
  }
}
