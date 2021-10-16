import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtilService } from './http-util.service';
import { Observable } from 'rxjs';
import { environment as env} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private readonly PATH: string = 'api/pj/';

  constructor(public httpClient: HttpClient,
     public httpUtil: HttpUtilService) {}

  listarRestaurantes(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH, this.httpUtil.headers());
  }

  listaRestauranteById(id: string): Observable<any> {
    console.log(id);
    return this.httpClient.get(env.baseUrl + this.PATH + id, this.httpUtil.headers());
  }

}
