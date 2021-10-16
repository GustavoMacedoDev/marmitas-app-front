import { ItemPedidoDto } from './item-pedido.dto';
import { FormaPagamento } from '../models/forma-pagamento.model';
import { RefDto } from '.';
import { Cliente } from '../models/cliente.model';
import { MesaDto } from './mesa.dto';
import { OpcaoAtendimento } from './opcao-atendimento.dto';

export interface PedidoDto {
    cliente: Cliente;
    pagamento: RefDto;
    itens: ItemPedidoDto[];
    mesa: MesaDto;
    opAtendimento: OpcaoAtendimento;
    totalPedido: number;
    valorPago: number;
    observacao: string;
    
}