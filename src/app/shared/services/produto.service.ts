import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtilService } from './http-util.service';
import { Observable } from 'rxjs';
import { environment as env} from 'src/environments/environment';
import { ProdutoDto } from '..';
import { Produto } from '../models/produto.dto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  

  private readonly PATHATIVOS: string = 'api/produtosativos';
  private readonly PATHQUIOSQUE: string = 'api/produtosquiosque';
  private readonly PATHENTREGA: string = 'api/produtosentrega';
  private readonly PATH: string = 'api/produtos';
  private readonly PATHCADASTRO: string = 'api/produto';
  private readonly PATHINATIVA: string = 'api/produto-inativa/';
  private readonly PATHEDITAR: string = 'api/produto';
  private readonly PATHBUSCA: string = 'api/produto/';
  private readonly PATHBUSCAPORID: string = 'api/produtoid/';

  constructor(public httpClient: HttpClient,
     public httpUtil: HttpUtilService) { }

  // listarProdutosAtivos(): Observable<any> {
  //   return this.httpClient.get(env.baseUrl + this.PATHATIVOS, this.httpUtil.headers());
  // }

  // listarProdutosQuiosque(): Observable<any> {
  //   return this.httpClient.get(env.baseUrl + this.PATHQUIOSQUE, this.httpUtil.headers());
  // }

  // listarProdutosEntrega(): Observable<any> {
  //   return this.httpClient.get(env.baseUrl + this.PATHENTREGA, this.httpUtil.headers());
  // }

  listarProdutos(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH, this.httpUtil.headers());
  }

  // listaProdutosPorCategoria(id) : Observable<any>{
  //   console.log(id);
  //   return this.httpClient.get(env.baseUrl + this.PATHBUSCA + id, this.httpUtil.headers());
  // }



  cadastrar(produto: ProdutoDto) : Observable<any> {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post(env.baseUrl + this.PATHCADASTRO, produto, this.httpUtil.headers());
  }

  listaProdutoPorId(id: string): Observable<any> {
    
    return this.httpClient.get(env.baseUrl + this.PATHBUSCAPORID + id, this.httpUtil.headers());
  }

  atualizaProduto(produto: Produto) {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    return this.httpClient.put(env.baseUrl + this.PATHEDITAR, 
      produto, this.httpUtil.headers());
  }

  inativaProduto(produtoId) {
    console.log(produtoId);
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    return this.httpClient.put(
      env.baseUrl + this.PATHINATIVA + produtoId, this.httpUtil.headers());

  }
}
