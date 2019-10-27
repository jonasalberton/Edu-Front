import { Injectable } from '@angular/core';
import { AbstractService } from './abstract/abstract.service';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitacao, StatusSolicicao } from '../models/solicitacao.model';
import { Atividade } from '../models/atividade.model';

@Injectable({
    providedIn: 'root'
})
export class SolicitacaoService extends AbstractService<any>{
    
    constructor(public http: HttpClient,
        public localStorageService: LocalStorageService) {
        super(http, "/solicitacao", localStorageService);
    }

    solicitarPermissaoCriador(): Observable<boolean> {
        const usuario =  this.localStorageService.getUsuario();
        return this.httpPost(usuario, '/criador');
    }

    solicitarPermissaoPublicacao(atividade: Atividade): Observable<any> {
        return this.httpPost(atividade, '/publicar-atividade')
    }

    buscarPorstatus(status: StatusSolicicao): Observable<Array<Solicitacao>> {
        return this.httpGet(`/admin/${status}`);
    }

    permitirCriador(solicitacao: Solicitacao): Observable<Solicitacao> {
        return this.httpPost(solicitacao, '/admin/permitir-criador');
    }

    permitirPublicacaoAtividade(solicitacao: Solicitacao): Observable<Solicitacao> {
        return this.httpPost(solicitacao, '/admin/permitir-criador');
    }
}