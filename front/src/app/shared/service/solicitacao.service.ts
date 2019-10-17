import { Injectable } from '@angular/core';
import { AbstractService } from './abstract/abstract.service';
import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitacao } from '../models/solicitacao.model';

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

    buscarTodas(): Observable<Array<Solicitacao>> {
        return this.httpGet('/admin');
    }
}