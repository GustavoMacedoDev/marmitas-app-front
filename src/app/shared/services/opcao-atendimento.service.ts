import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtilService } from './http-util.service';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OpcaoAtendimentoService {

  private readonly PATH: string = 'api/opatendimentos';

  constructor(
              private httpClient: HttpClient,
              private httpUtil: HttpUtilService
  ) { }

  listarOpAtendimento(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH, this.httpUtil.headers());
  }
}
