import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Endereco } from 'src/app/shared/models/endereco.dto';
import { EnderecoService } from 'src/app/shared/services/endereco.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edita-pf',
  templateUrl: './edita-pf.component.html',
  styleUrls: ['./edita-pf.component.css']
})
export class EditaPfComponent implements OnInit {

  cliente: Cliente;
  clienteId: string;
  form: FormGroup;
  numberPattern = /^[0-9]*$/;

  constructor(
              private clienteService: ClienteService,
              private enderecoService: EnderecoService,
              config: NgbModalConfig, 
              private modalService: NgbModal,
              private router: ActivatedRoute,
              private route: Router,
              private fb: FormBuilder, 
              private snackBar: MatSnackBar
              ) {
                config.backdrop = 'static';
                config.keyboard = false;
               }

  ngOnInit(): void {
    this.clienteId = this.router.snapshot.params['id'];
    console.log(this.clienteId);
    this.obterDadosCliente();
    this.gerarForm();
  }

  open(content) {
    this.modalService.open(content);
  }

  obterDadosCliente() {
    this.clienteService.findById(this.clienteId).subscribe(res => this.cliente = res);
  }

  gerarForm() {
  	this.form = this.fb.group({
      logradouro: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      numero: this.fb.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      complemento: this.fb.control('', [Validators.required, Validators.minLength(0)]),
      bairro: this.fb.control('', [Validators.required, Validators.minLength(3)])
  	});
  }

  salvar() {
    
  }

  cadastrarEnderecoPf() {
    const endereco: Endereco = this.form.value;
    endereco.cliente = this.cliente;

    this.enderecoService.cadastrar(endereco).subscribe(
      data => {
        const msg: string = "Endereço cadastrado com sucesso";
        this.snackBar.open(msg, "Sucesso", { duration: 5000 });
        this.route.navigate(['/lista-clientes']);
      },
      err => {
        let msg: string = "Tente novamente em instantes.";
        console.log(err.status);
        if (err.status == 400) {
          msg = err.error.errors.join(' ');
        } else if (err.status == 500) {
          msg = "Cliente já cadastrado";
        }
        this.snackBar.open(msg, "Erro", { duration: 5000 });
      }
    );

    console.log(endereco);

  }

}
