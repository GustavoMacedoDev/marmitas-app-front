import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';import { Observable } from 'rxjs';
import { CadastroPf } from '../models/cadastro-pf.model';
;


@Injectable({
  providedIn: 'root'
})
export class CadastrarPfService {

  private readonly PATH: string = 'api/cadastrar-pf';

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPf: CadastroPf): Observable<any> {
  	  return this.http.post(env.baseUrl + this.PATH, cadastroPf);
  }
}
