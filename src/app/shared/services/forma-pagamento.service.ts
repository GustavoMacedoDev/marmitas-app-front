import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment as env} from '../../../environments/environment';
import { Observable } from 'rxjs';
import { FormaPagamento } from '../models/forma-pagamento.model';
import { HttpUtilService } from './http-util.service';

@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {

  private readonly PATH: string = 'api/formapagamentos'; 

  constructor(private http: HttpClient, private httpUtil: HttpUtilService) { }

  listarFormasPagamento(): Observable<any>{
    return this.http.get(env.baseUrl + this.PATH, this.httpUtil.headers());
  }
}
