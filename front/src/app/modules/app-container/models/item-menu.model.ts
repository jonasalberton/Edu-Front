export class ItemMenu {

    constructor( _nome: string, _icone: string, _rota: string) {
        this.icone = _icone;
        this.nome = _nome;
        this.rota = _rota;
    }

    icone: string;
    nome: string;
    rota: string;
}