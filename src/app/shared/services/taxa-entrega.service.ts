import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtilService } from './http-util.service';
import { TaxaEntrega } from '../interfaces/taxa-entrega.dto';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaxaEntregaService {

  private readonly PATH: string = 'api/taxas';
  private readonly PATHCADASTRO: string = 'api/taxa';

  constructor(public httpClient: HttpClient,
    public httpUtil: HttpUtilService) { }


  listarTaxas(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH, this.httpUtil.headers());
  }

  cadastrar(taxa: TaxaEntrega) : Observable<any> {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post(env.baseUrl + this.PATHCADASTRO,
       taxa, this.httpUtil.headers());
  }
}
