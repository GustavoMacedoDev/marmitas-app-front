import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TaxaEntrega } from 'src/app/shared/interfaces/taxa-entrega.dto';
import { TaxaEntregaService } from 'src/app/shared/services/taxa-entrega.service';

@Component({
  selector: 'app-cadastra-taxa',
  templateUrl: './cadastra-taxa.component.html',
  styleUrls: ['./cadastra-taxa.component.css']
})
export class CadastraTaxaComponent implements OnInit {

  form: FormGroup;


  constructor(
              private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private router: Router,
              private taxaEntregaService: TaxaEntregaService) { }


  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
  	this.form = this.fb.group({
  		descricao: ['', [Validators.required]],
      valor: this.fb.control('', [Validators.required])
  	});
  }

  cadastrarTaxa(){
    if (this.form.invalid) {
      return;
    }

    const taxaEntrega: TaxaEntrega = this.form.value;
    console.log(this.form.value);
    this.taxaEntregaService.cadastrar(taxaEntrega)
      .subscribe(
        data => {
          const msg: string = "Taxa cadastrada com sucesso";
          this.snackBar.open(msg, "Sucesso", { duration: 5000 });
          this.router.navigate(['/lista-taxa']);
        },
        err => {
          let msg: string = "Tente novamente em instantes.";
          if (err.status == 400) {
            msg = err.error.errors.join(' ');
          }
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  	return false;
  }

}

