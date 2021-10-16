import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtilService } from './http-util.service';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { Categoria } from '../interfaces/categoria.dto';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly PATH: string = 'api/categoria';

  constructor(public httpClient: HttpClient,
     public httpUtil: HttpUtilService) { }

     listarCategorias(): Observable<any>{
       return this.httpClient.get(env.baseUrl + this.PATH, this.httpUtil.headers());
     }

     cadastraCategoria(categoria: Categoria): Observable<any> {
       return this.httpClient.post(env.baseUrl + this.PATH, 
        categoria, this.httpUtil.headers());
     }

}
