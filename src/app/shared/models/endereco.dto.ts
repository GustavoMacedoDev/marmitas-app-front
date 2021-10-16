import { Cliente } from './cliente.model';
import { RefDto } from '../interfaces';

export interface Endereco {
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cliente: RefDto;
}