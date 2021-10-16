import { Injectable } from '@angular/core';
import { Endereco } from '../models/endereco.dto';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpUtilService } from './http-util.service';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private readonly PATH: string = 'api/cadastra-endereco';

  constructor(
              private http: HttpClient,
              private httpUtil: HttpUtilService
    ) { }


  cadastrar(endereco: Endereco): Observable<any> {
    return this.http.post(env.baseUrl + this.PATH, endereco, this.httpUtil.headers());
}
}
