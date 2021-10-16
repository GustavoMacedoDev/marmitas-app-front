import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment';

import { Login } from '../';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  private readonly PATH: string = 'auth';

  constructor(private http: HttpClient) { 

  }

  logar(login: Login): Observable<any> {
 	return this.http.post(env.baseUrl + this.PATH, login);
  }

}