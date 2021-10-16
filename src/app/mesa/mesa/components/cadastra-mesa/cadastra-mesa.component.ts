import { Component, OnInit } from '@angular/core';
import { MesaDto } from 'src/app/shared/interfaces/mesa.dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MesaService } from 'src/app/shared/services/mesa.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra-mesa',
  templateUrl: './cadastra-mesa.component.html',
  styleUrls: ['./cadastra-mesa.component.css']
})
export class CadastraMesaComponent implements OnInit {

  form: FormGroup;
  mesa: MesaDto;

  constructor(
              private fb: FormBuilder,
              private mesaService: MesaService,
              private snackBar: MatSnackBar,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
  	this.form = this.fb.group({
  		numeroMesa: ['', [Validators.required]]
  	});
  }

  cadastrarMesa(){
    if (this.form.invalid) {
      return;
    }

    const mesa: MesaDto = this.form.value;
    console.log(this.form.value);
    this.mesaService.cadastrar(mesa)
      .subscribe(
        data => {
          const msg: string = "Mesa cadastrada com sucesso";
          this.snackBar.open(msg, "Sucesso", { duration: 5000 });
          this.router.navigate(['/lista-mesa']);
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
