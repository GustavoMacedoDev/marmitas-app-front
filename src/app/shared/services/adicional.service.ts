import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtilService } from './http-util.service';
import {environment as env} from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdicionalService {

  private readonly PATHSAVE: string = 'api/adicional';
  private readonly PATHFINDALL: string = 'api/adicionais';

  constructor(public httpClient: HttpClient,
    public httpUtil: HttpUtilService) { }

    listaTodosAdicionais(): Observable<any> {
      return this.httpClient.get(env.baseUrl + this.PATHFINDALL, this.httpUtil.headers());
    }

}
