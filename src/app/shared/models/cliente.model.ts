import { Endereco } from './endereco.dto';

export class Cliente {
    id : string;
    nome: string;
    telefone: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    enderecos: Endereco[];

    public getId() {
        return this.id = '1';
    }
}