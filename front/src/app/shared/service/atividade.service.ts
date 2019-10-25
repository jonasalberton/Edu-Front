import { Injectable } from '@angular/core';
import { AbstractService } from './abstract/abstract.service';
import { Atividade } from '../models/atividade.model';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';

@Injectable()
export class AtividadeService extends AbstractService<Atividade>{

	constructor(
		public http: HttpClient,
		public localStorageService: LocalStorageService) {
		super(http, "/atividade", localStorageService);
	}

	salvar(atividade: Atividade): Observable<Atividade> {
		return this.httpPost(atividade, '/creator');
	}

}