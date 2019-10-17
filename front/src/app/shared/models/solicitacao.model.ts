import { Usuario } from './usuario.model';

export class Solicitacao {
    id: number;
    tipoSolicitacao: TipoSolicitacao;
    statusSolicitacao: StatusSolicicao
    descricao: string;
    solicitante: Usuario;
}

export enum TipoSolicitacao {
    SOLICITACAO_CRIADOR = 'SOLICITACAO_CRIADOR',
    SOLICITACAO_PUBLICACAO = 'SOLICITACAO_PUBLICACAO' 
}

export enum StatusSolicicao {
    ACEITA = 'ACEITA',
    NEGADA = 'NEGADA'
}
