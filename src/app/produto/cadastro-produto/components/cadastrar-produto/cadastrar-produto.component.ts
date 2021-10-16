import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Categoria } from 'src/app/shared/interfaces/categoria.dto';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { ProdutoDto } from 'src/app/shared';
import { ProdutoService } from 'src/app/shared/services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Restaurant } from 'src/app/shared/interfaces/restaurant.dto';
import { Router } from '@angular/router';
import { OpcaoAtendimentoService } from 'src/app/shared/services/opcao-atendimento.service';
import { OpcaoAtendimento } from 'src/app/shared/interfaces/opcao-atendimento.dto';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  form: FormGroup;
  categorias: Categoria[];
  restaurantes: Restaurant[];
  options: OpcaoAtendimento[];

  constructor(private fb: FormBuilder,
              private categoriaService: CategoriaService,
              private produtoService: ProdutoService,
              private snackBar: MatSnackBar,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.gerarForm();
    this.categoriaService.listarCategorias().subscribe(res => this.categorias = res);
  }

  gerarForm() {
  	this.form = this.fb.group({
  		nome: ['', [Validators.required]],
      preco: this.fb.control('', [Validators.required]),
      categoria: this.fb.control('', [Validators.required]),
  	});
  }

  cadastrarProduto() {
  	if (this.form.invalid) {
      return;
    }

    const produto: ProdutoDto = this.form.value;
    
    this.produtoService.cadastrar(produto)
      .subscribe(
        data => {
          const msg: string = "Produto cadastrado com sucesso";
          this.snackBar.open(msg, "Sucesso", { duration: 5000 });
          this.router.navigate(['/lista-produto']);
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
