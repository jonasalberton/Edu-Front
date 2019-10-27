import { Usuario } from './usuario.model';
import { Capitulo } from './capitulo.model';
import { File } from './file.model';
import { StatusSolicicao } from './solicitacao.model';

export class Atividade {

    constructor() {
        this.capitulos =  [];
        this.imagem =  new File();
    }

    id: number;
    titulo: string;
    descricao: string;
    criador: Usuario;
    capitulos: Capitulo[];
    imagem: File;
    status: StatusSolicicao;
    cargaHorariaCriador: number;
    cargaHorariaAluno: number;
}