import { RefDto } from '../interfaces';
import { FormaPagamento } from './forma-pagamento.model';

class Order {
    constructor(
      public cliente: RefDto,
      public pagamento: FormaPagamento,
      public itens: OrderItem[] = []
    ){}
  }
  
  class OrderItem {
    constructor(public quantidade: number, public produto: RefDto){}
  }
  
  export {Order, OrderItem}