import { Injectable } from '@angular/core';
import { ShoppingCartService } from '.';
import { HttpClient } from '@angular/common/http';
import { CartItem } from '../models/cart-item.model';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { environment as env} from 'src/environments/environment';
import { HttpUtilService } from './http-util.service';
import { PedidoDto } from '..';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly PATH: string = 'api/order';
  private readonly PATHMESA: string = 'api/orderMesa';
  private readonly PATHBALCAO: string = 'api/orderBalcao';


  constructor(private cartService: ShoppingCartService,
              private http: HttpClient, public httpUtil: HttpUtilService){}

  itemsValue(): number {
    return this.cartService.total()
  }

  cartItems(): CartItem[]{
    return this.cartService.items
  }

  increaseQty(item: CartItem){
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.cartService.removeItem(item)
  }

  clear(){
    this.cartService.clear()
  }

  checkOrder(pedido: PedidoDto): Observable<any> {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    return this.http.post(env.baseUrl + this.PATH, pedido,
       this.httpUtil.headers());
  }

  checkOrderMesa(pedido: PedidoDto): Observable<any> {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    return this.http.post(env.baseUrl + this.PATHMESA, pedido,
       this.httpUtil.headers());
  }

  checkOrderBalcao(pedido: PedidoDto): Observable<any> {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    return this.http.post(env.baseUrl + this.PATHBALCAO, pedido,
       this.httpUtil.headers());
  }
}
