import { Component, OnInit, OnDestroy } from '@angular/core';
import { SolicitacaoService } from 'src/app/shared/service/solicitacao.service';
import { Solicitacao, TipoSolicitacao, StatusSolicicao } from 'src/app/shared/models/solicitacao.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-lista-solicitacoes',
    templateUrl: './lista-solicitacoes.component.html',
    styleUrls: ['./lista-solicitacoes.component.css']
})
export class ListaSolicitacoesComponent implements OnInit, OnDestroy {
    filtroPesquisa = StatusSolicicao.PENDENTE;
    tituloFiltro = 'Pendentes';
    solicitacoes: Array<Solicitacao> = [];
    
    subBuscaSolicitacoes: Subscription;
    subPermitirSolicitacao: Subscription;
    

    constructor(
        private solicitacaoService: SolicitacaoService) { }

    ngOnInit() {
        this.buscarSolicitacoes();
    }

    ngOnDestroy() {
        if(this.subBuscaSolicitacoes) this.subBuscaSolicitacoes.unsubscribe();
        if(this.subPermitirSolicitacao) this.subBuscaSolicitacoes.unsubscribe();
    }

    buscarSolicitacoes(): void {
        this.subBuscaSolicitacoes = this.solicitacaoService.buscarPorstatus(this.filtroPesquisa).subscribe(
            _solicitacoes => {
                this.solicitacoes = _solicitacoes;
            }
        )
    }

    getIconByTiposolicitacao(solicitacao: Solicitacao): string {
        return solicitacao.tipoSolicitacao === TipoSolicitacao.CRIADOR ? 'criador' : 'video';
    }

    setFiltro(filtro: StatusSolicicao): void {
         this.tituloFiltro = filtro.substr(0, 1).toUpperCase() + filtro.substr(1).toLowerCase() + 's';
         this.filtroPesquisa = filtro;
         this.buscarSolicitacoes();
    }

    permitir(solicitacao: Solicitacao): void {
        solicitacao.solicitante = {id: solicitacao.solicitante.id} as any;
        this.subPermitirSolicitacao = this.solicitacaoService.permitirCriador(solicitacao).subscribe(
            _solicitacao => this.removerSolicitacao(_solicitacao)            
        );
    }
    
    removerSolicitacao(solicitacao: Solicitacao): void {
        const index = this.solicitacoes.findIndex( item => item.id === solicitacao.id);
        this.solicitacoes.splice(index, 1);
    }
}
