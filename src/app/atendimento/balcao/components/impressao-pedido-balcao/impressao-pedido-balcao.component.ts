import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListaPedido } from 'src/app/shared/interfaces/lista-pedido.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import { FormaPagamentoService } from 'src/app/shared/services/forma-pagamento.service';
import { PagamentoService } from 'src/app/shared/services/pagamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { FormaPagamento } from 'src/app/shared/models/forma-pagamento.model';
import { Pagamento } from 'src/app/shared/interfaces/pagamento.dto';
import { Cliente } from 'src/app/shared/models/cliente.model';
import * as jsPdf from  'jspdf';

@Component({
  selector: 'app-impressao-pedido-balcao',
  templateUrl: './impressao-pedido-balcao.component.html',
  styleUrls: ['./impressao-pedido-balcao.component.css']
})
export class ImpressaoPedidoBalcaoComponent implements OnInit {

  pedido: ListaPedido;
  @ViewChild('report') report: ElementRef;
  form: FormGroup;
  formaPagamentos: FormaPagamento[];
  pagamentos: Pagamento[];
  clientes: Cliente[];
  trocoInput: number;
  valorPagoInput: number;
  formaPagamento: any;
  valorPg: number;

  constructor(
              private pedidoService: PedidoService,
              private formaPagamentoService: FormaPagamentoService,
              private pagamentoService: PagamentoService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              config: NgbModalConfig, 
              private modalService: NgbModal,
              private clienteService: ClienteService
              ) { 
                config.backdrop = 'static';
                config.keyboard = false;
              }
  

  ngOnInit(): void {
    this.gerarForm();
    this.pedidoService.listaPedidoByIdPedido(this.route.snapshot.params['id'])
      .subscribe(res => this.pedido = res);
    this.formaPagamentoService.listarFormasPagamento()
      .subscribe(res => this.formaPagamentos = res);
    this.pagamentoService.findPagamentosByIdPedido(this.route.snapshot.params['id'])
      .subscribe(res => this.pagamentos = res);
  }

  gerarForm() {
    this.form = this.formBuilder.group({
  		cliente: this.formBuilder.control(['', [Validators.required]]),
      fPagamento: this.formBuilder.control('', [Validators.required]),
      valorPago: this.formBuilder.control('', [Validators.required]),
      troco: this.formBuilder.control('', [Validators.required])
  	});
  }

  open(content) {
    this.modalService.open(content);
    this.pagamentoService.findPagamentosByIdMesa(this.route.snapshot.params['id'])
      .subscribe(res => this.pagamentos = res);
      this.clienteService.listarClientes().subscribe(res => this.clientes = res);
  }

  imprimir(){
    let doc = new jsPdf();

    let specialElementHandlers = {
      '#editor': function(element, renderer) {
        return true;
      } 
    };

    let report = this.report.nativeElement;

    doc.fromHTML(report.innerHTML, 5, 5, {
      'width': 70,
      'height': 100,
      'elementHandlers': specialElementHandlers,
    });

    doc.autoPrint();

    doc.output('dataurlnewwindow');
  }

  salvar() {

    const pagamento: Pagamento = this.form.value;

    pagamento.idPedido = this.pedido.idPedido;

    console.log(pagamento);

    this.pagamentoService.salvaPagamentoEntrega(pagamento).subscribe();
    this.router.navigate(['/lista-pedido-balcao']);

  }

}
