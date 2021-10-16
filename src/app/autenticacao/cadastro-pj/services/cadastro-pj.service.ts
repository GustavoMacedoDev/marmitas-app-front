import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CadastroPj } from '../models';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastrarPjService {

  private readonly PATH: string = 'api/cadastrar-pj';

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPj: CadastroPj): Observable<any> {
    return this.http.post(env.baseUrl + this.PATH, cadastroPj);
  }

}
