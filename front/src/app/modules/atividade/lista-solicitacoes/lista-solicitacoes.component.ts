import { Component, OnInit } from '@angular/core';
import { SolicitacaoService } from 'src/app/shared/service/solicitacao.service';
import { Solicitacao, TipoSolicitacao } from 'src/app/shared/models/solicitacao.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-lista-solicitacoes',
    templateUrl: './lista-solicitacoes.component.html',
    styleUrls: ['./lista-solicitacoes.component.css']
})
export class ListaSolicitacoesComponent implements OnInit {
    solicitacoes: Array<Solicitacao> = [];
    subBuscaSolicitacoes: Subscription;

    constructor(
        private solicitacaoService: SolicitacaoService) { }

    ngOnInit() {
        this.buscarSolicitacoes();
    }

    buscarSolicitacoes(): void {
        this.subBuscaSolicitacoes = this.solicitacaoService.buscarTodas().subscribe(
            _solicitacoes => {
                this.solicitacoes = _solicitacoes;
            }
        )
    }

    getIconByTiposolicitacao(solicitacao: Solicitacao): string {
        return solicitacao.tipoSolicitacao === TipoSolicitacao.SOLICITACAO_CRIADOR ? 'criador' : '';
    }
}
