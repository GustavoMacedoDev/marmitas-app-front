import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtilService } from './http-util.service';
import { environment as env } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { MesaDto } from '../interfaces/mesa.dto';

@Injectable({
  providedIn: 'root'
})
export class MesaService {
  
  private readonly PATHBUSCATODAS: string = 'api/mesas';
  private readonly PATHBUSCAPORID: string = 'api/mesa/';
  private readonly PATHCADASTRA: string = 'api/mesa';
  
  constructor(public httpClient: HttpClient,
    public httpUtil: HttpUtilService) { }

  listarMesas(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATHBUSCATODAS, this.httpUtil.headers());
  }

  cadastrar(mesa: MesaDto) {
    return this.httpClient.post(env.baseUrl + this.PATHCADASTRA,
       mesa, this.httpUtil.headers());

  }

  buscaMesaPorId(id: string): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATHBUSCAPORID + id, this.httpUtil.headers());
  }
}
