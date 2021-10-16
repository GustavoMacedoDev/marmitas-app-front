import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtilService } from './http-util.service';
import { Observable } from 'rxjs';
import { environment as env} from 'src/environments/environment';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly PATH: string = 'api/clientes';
  private readonly PATHBUSCABYID: string = 'api/cliente/';

  constructor(public httpClient: HttpClient,
     public httpUtil: HttpUtilService) { }

  listarClientes(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH, this.httpUtil.headers());
  }

  findByTelefone(telefone: Cliente) {
    return this.httpClient.get<Cliente>(`${env.baseUrl}api/clientes?value=${telefone}`, 
            this.httpUtil.headers());
  }

  findById(id: string): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATHBUSCABYID + id, this.httpUtil.headers());
  }

}
