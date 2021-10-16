import { Injectable } from '@angular/core';
import { HttpUtilService } from './http-util.service';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { Pagamento } from '../interfaces/pagamento.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  private readonly PATHCADASTRA: string = 'api/pagamento';
  private readonly PATHANALITICO: string = 'api/pagamento/analitico/';
  private readonly PATHPAGAMENTOENTREGA: string = 'api/pagamentoentrega';
  private readonly PATH: string = 'api/pagamentos';
  private readonly PATHFATURAMENTO: string = 'api/faturamento';
  private readonly PATHBUSCAPORMESA: string = 'api/pagamento/mesa/';
  private readonly PATHBUSCAPORPEDIDO: string = 'api/pagamento/entrega/';

  constructor(
              private httpUtil: HttpUtilService,
              private httpClient: HttpClient
              ) { }

    listaPagamentos(): Observable<any> {
      return this.httpClient.get(env.baseUrl + this.PATH,
                                this.httpUtil.headers());
    }

    salvaPagamento(pagamento: Pagamento): Observable<any> {
      return this.httpClient.post(env.baseUrl + this.PATHCADASTRA, pagamento, this.httpUtil.headers() );
    }

    salvaPagamentoEntrega(pagamento: Pagamento): Observable<any> {
      return this.httpClient.post(env.baseUrl + this.PATHPAGAMENTOENTREGA, pagamento, this.httpUtil.headers() );
    }

    findPagamentosByIdMesa(id): Observable<any> {
      return this.httpClient.get(
                                env.baseUrl + this.PATHBUSCAPORMESA + id,
                                this.httpUtil.headers()
                                );
    }

    findPagamentosByIdPedido(id): Observable<any> {
      return this.httpClient.get(
                                env.baseUrl + this.PATHBUSCAPORPEDIDO + id,
                                this.httpUtil.headers()
                                );
    }

    findPagamentosByIdFormaPagamento(id): Observable<any> {
      return this.httpClient.get(
                                env.baseUrl + this.PATHANALITICO + id,
                                this.httpUtil.headers()
                                );
    }

    faturamento(): Observable<any> {
      return this.httpClient.get(env.baseUrl + this.PATHFATURAMENTO,
                                this.httpUtil.headers());
    }



}
