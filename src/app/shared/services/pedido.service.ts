import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtilService } from './http-util.service';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { PedidoDto } from '../interfaces';
import { ListaPedido } from '../interfaces/lista-pedido.dto';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private readonly PATH: string = 'api/pedido/';
  private readonly PATHTOTALPEDIDOS: string = 'api/totalpedidos/';
  private readonly PATHMESA: string = 'api/pedidoOpcao/';
  private readonly PATHMESAS: string = 'api/mesas/';
  private readonly PATHENTREGASINATIVAS: string = 'api/pedidoInativosOpcao/';
  private readonly PATHPEDIDOSFECHADOS: string = 'api/pedidosfechados/';
  private readonly PATHMESAID: string = 'api/pedidosMesa/';
  private readonly PATHPEDIDOBALCAO: string = 'api/pedidoBalcao/';

  constructor(public httpClient: HttpClient,
     public httpUtil: HttpUtilService) { }

    listarPedidos(): Observable<any>{
      return this.httpClient.get(env.baseUrl + this.PATH, this.httpUtil.headers());
    }

    listarMesas(): Observable<any>{
      return this.httpClient.get(env.baseUrl + this.PATHMESAS, this.httpUtil.headers());
    }

     listaPedidoById(id): Observable<any> {
       return this.httpClient.get(
         env.baseUrl + this.PATH + id, this.httpUtil.headers());
     }

     listaPedidoByIdPedido(id): Observable<any> {
      return this.httpClient.get(
        env.baseUrl + this.PATHPEDIDOBALCAO + id, this.httpUtil.headers());
    }

     listaPedidoByIdMesa(id: number): Observable<any> {
      return this.httpClient.get(
        env.baseUrl + this.PATHMESAID + id, this.httpUtil.headers());
     }

    listarPedidosAtivosPorOpcao(id: number): Observable<any> {
      return this.httpClient.get(
        env.baseUrl + this.PATHMESA + id, this.httpUtil.headers());
    }

    listarPedidosInativosPorOpcao(id: number): Observable<any> {
      return this.httpClient.get(
        env.baseUrl + this.PATHENTREGASINATIVAS + id, this.httpUtil.headers());
    }

    totaldePedidos(): Observable<any>{
      return this.httpClient.get(env.baseUrl + this.PATHTOTALPEDIDOS, this.httpUtil.headers());
    }
}