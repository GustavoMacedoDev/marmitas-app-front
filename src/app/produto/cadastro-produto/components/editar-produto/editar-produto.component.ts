import { Component, OnInit } from '@angular/core';
import { ProdutoDto } from 'src/app/shared';
import { ProdutoService } from 'src/app/shared/services';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Produto } from 'src/app/shared/models/produto.dto';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  form: FormGroup;
  produtoId: string;

  constructor(
              private produtoService: ProdutoService, 
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private route: Router,
              private snackBar: MatSnackBar,

              ) { }

  ngOnInit(): void {
    this.produtoId = this.router.snapshot.params['id'];
   // this.gerarForm();
    this.obterDadosProduto();
  }

 // gerarForm() {
  ///	this.form = this.fb.group({
 // 		nome: ['', [Validators.required]],
//preco: ['', [Validators.required]]
//});
 // }

  obterDadosProduto() {
    this.produtoService.listaProdutoPorId(this.produtoId)
      .subscribe(res => this.produto = res);
      
  }

  salvar() {
    this.produtoService.atualizaProduto(this.produto).subscribe();
    const msg: string = "Produto alterado com sucesso";
          this.snackBar.open(msg, "Sucesso", { duration: 5000 });
          this.route.navigate(['/lista-produto']);
  }


}
