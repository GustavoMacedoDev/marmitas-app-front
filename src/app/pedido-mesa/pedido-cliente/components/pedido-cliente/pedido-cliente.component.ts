import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-cliente',
  templateUrl: './pedido-cliente.component.html',
  styleUrls: ['./pedido-cliente.component.css']
})
export class PedidoClienteComponent implements OnInit {

  form: FormGroup;

  constructor(
              private fb: FormBuilder,
              private router: Router
            ) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required]]
      
    });
  }

  avancaOpcoes() {
    this.router.navigate(['/opcoes']);
  }
  

}
