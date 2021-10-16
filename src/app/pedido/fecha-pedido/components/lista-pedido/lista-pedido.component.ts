import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PedidoDto } from 'src/app/shared';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import * as jsPdf from  'jspdf';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaPedido } from 'src/app/shared/interfaces/lista-pedido.dto';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PagamentoService } from 'src/app/shared/services/pagamento.service';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { Pagamento } from 'src/app/shared/interfaces/pagamento.dto';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormaPagamento } from 'src/app/shared/models/forma-pagamento.model';
import { FormaPagamentoService } from 'src/app/shared/services/forma-pagamento.service';
@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.css']
})
export class ListaPedidoComponent implements OnInit {

  form: FormGroup;
  pedido: ListaPedido;
  pedidoPag: ListaPedido;
  dados: any;
  @ViewChild('content') content: ElementRef;
  @ViewChild('report') report: ElementRef;
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
              private route: ActivatedRoute,
              config: NgbModalConfig, 
              private modalService: NgbModal,
              private pagamentoService: PagamentoService,
              private clienteService: ClienteService,
              private formBuilder: FormBuilder,
              private router: Router
              ) { 
                config.backdrop = 'static';
                config.keyboard = false;
              }

  ngOnInit(): void {
    this.gerarForm();
    this.pedidoService.listaPedidoById(this.route.snapshot.params['id'])
    .subscribe(res => this.pedido = res);
    this.formaPagamentoService.listarFormasPagamento()
      .subscribe(res => this.formaPagamentos = res);
    this.itensPedido();
  }

  gerarForm() {
    this.form = this.formBuilder.group({
  		cliente: this.formBuilder.control(['', [Validators.required]]),
      fPagamento: this.formBuilder.control('', [Validators.required]),
      valorPago: this.formBuilder.control('', [Validators.required]),
      troco: this.formBuilder.control('', [Validators.required])
  	});
  }


  itensPedido() {
    
  }

  open(content) {
    this.modalService.open(content);
    this.pagamentoService.findPagamentosByIdPedido(this.route.snapshot.params['id'])
      .subscribe(res => this.pagamentos = res);
    this.clienteService.listarClientes().subscribe(res => {
        this.clientes = res;
        console.log(this.clientes);
      });
    this.pedidoService.listaPedidoById(this.route.snapshot.params['id'])
      .subscribe(res => this.pedidoPag = res);
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
      'elementHandlers': specialElementHandlers
    });

    doc.output('dataurlnewwindow');
  }

  salvar() {

    const pagamento: Pagamento = this.form.value;

    pagamento.idPedido = this.pedido.idPedido;

    console.log(pagamento);

    this.pagamentoService.salvaPagamentoEntrega(pagamento).subscribe();
    this.router.navigate(['/order-confirmation']);

  }


}
