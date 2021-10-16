import { Component, OnInit } from '@angular/core';
import { OpcaoAtendimentoService } from 'src/app/shared/services/opcao-atendimento.service';
import { OpcaoAtendimento } from 'src/app/shared/interfaces/opcao-atendimento.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opcao-atendimento',
  templateUrl: './opcao-atendimento.component.html',
  styleUrls: ['./opcao-atendimento.component.css']
})
export class OpcaoAtendimentoComponent implements OnInit {

  options: OpcaoAtendimento[];

  constructor(
              private opcaoService: OpcaoAtendimentoService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.opcaoService.listarOpAtendimento()
      .subscribe(res => this.options = res);
  }

  opcaoAtendimento(id) {
    console.log(id);
    if(id == 1) {
      this.router.navigate(['/lanca-pedido-balcao']);
    } else if (id == 2){
      this.router.navigate(['/restaurants/2/menu']);
    } else {
      this.router.navigate(['/lista-mesa']);
    }
  }

}
