import { Permissao } from './permissao.model';

export class Usuario {
    id: number;
    nome: string;
    username: string;
    password: string;
    permissoes: Array<Permissao>;
}