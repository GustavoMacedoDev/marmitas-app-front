import { FormaPagamento } from '../models/forma-pagamento.model';
import { MesaDto } from './mesa.dto';
import { Cliente } from '../models/cliente.model';

export class Pagamento {
    id: string;
    valorPago: number;
    formaPagamento: FormaPagamento;
    mesa: MesaDto;
    cliente: Cliente;
    idPedido: string;
    
}