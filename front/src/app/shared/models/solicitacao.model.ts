import { Usuario } from './usuario.model';

export class Solicitacao {
    id: number;
    tipoSolicitacao: TipoSolicitacao;
    statusSolicitacao: StatusSolicicao
    descricao: string;
    solicitante: Usuario;
}

export enum TipoSolicitacao {
   CRIADOR = 'CRIADOR',
   PUBLICACAO = 'PUBLICACAO'
}

export enum StatusSolicicao {
    ACEITA = 'ACEITA',
    NEGADA = 'NEGADA',
    PENDENTE = 'PENDENTE'
}
