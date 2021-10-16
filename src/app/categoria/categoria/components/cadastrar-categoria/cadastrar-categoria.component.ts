import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/shared/interfaces/categoria.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/shared/services/categoria.service';

@Component({
  selector: 'app-cadastrar-categoria',
  templateUrl: './cadastrar-categoria.component.html',
  styleUrls: ['./cadastrar-categoria.component.css']
})
export class CadastrarCategoriaComponent implements OnInit {

  form: FormGroup;

  categoria: Categoria;

  constructor(
              private fb: FormBuilder, 
              private snackBar: MatSnackBar,
              private router: Router,
              private categoriaService: CategoriaService
              ) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
  	this.form = this.fb.group({
  		nome: ['', [Validators.required, Validators.minLength(5)]],
  	});
  }

  cadastraCategoria() {
    if (this.form.invalid) {
      return;
    }

    const categoria: Categoria = this.form.value;
    
    this.categoriaService.cadastraCategoria(categoria)
      .subscribe(
        data => {
          const msg: string = "Categoria cadastrada com sucesso";
          this.snackBar.open(msg, "Sucesso", { duration: 5000 });
          this.router.navigate(['/lista-categoria']);
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
