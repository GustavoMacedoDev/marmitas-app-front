import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Endereco } from 'src/app/shared/models/endereco.dto';

@Component({
  selector: 'app-lista-pf',
  templateUrl: './lista-pf.component.html',
  styleUrls: ['./lista-pf.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ListaPfComponent implements OnInit {

  clientes: Cliente[];
  enderecos: Endereco[];
  
  constructor(
              private clienteService: ClienteService,
              config: NgbModalConfig,
              private modalService: NgbModal
              ) {
                config.backdrop = 'static';
                config.keyboard = false;
               }

  ngOnInit(): void {
    this.clienteService.listarClientes()
      .subscribe(res => this.clientes = res);
  }

  open(content) {
    this.modalService.open(content);
  }

  }
