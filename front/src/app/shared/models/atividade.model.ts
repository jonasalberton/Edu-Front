import { Usuario } from './usuario.model';

export class Atividade {
    id: any;
    nome: string;
    autor: Usuario;
    avaliacao: number;
    descricao: string;
    preview: string;
}