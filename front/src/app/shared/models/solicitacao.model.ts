import { Usuario } from './usuario.model';
import { Atividade } from './atividade.model';

export class Solicitacao {
    id: number;
    tipoSolicitacao: TipoSolicitacao;
    statusSolicitacao: StatusSolicicao
    atividade: Atividade;
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
    PENDENTE = 'PENDENTE',
    ENVIADA_PARA_ANALISE = 'ENVIADA_PARA_ANALISE'
}
