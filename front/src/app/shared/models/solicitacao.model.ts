import { Usuario } from './usuario.model';

export class Solicitacao {
    id: number;
    nome: string;
    solicitante: Usuario;
}