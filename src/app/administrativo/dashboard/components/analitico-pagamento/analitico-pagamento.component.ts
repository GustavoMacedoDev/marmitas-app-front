import { Component, OnInit } from '@angular/core';
import { PagamentoService } from 'src/app/shared/services/pagamento.service';
import { Pagamento } from 'src/app/shared/interfaces/pagamento.dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-analitico-pagamento',
  templateUrl: './analitico-pagamento.component.html',
  styleUrls: ['./analitico-pagamento.component.css']
})
export class AnaliticoPagamentoComponent implements OnInit {

  pagamentos: Pagamento[];

  constructor(
              private pagamentoService: PagamentoService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.resumoAnaliticoPorFormaPagamento();
  }

  resumoAnaliticoPorFormaPagamento() {
    
    this.pagamentoService.findPagamentosByIdFormaPagamento(this.route.snapshot.params['id']).subscribe(res => this.pagamentos = res);
  }

}
