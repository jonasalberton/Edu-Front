import { Usuario } from './usuario.model';
import { Atividade } from './atividade.model';

export class Certificado {
    id: number;
    usuario: Usuario;
    atividade: Atividade;
    criador: boolean;
}