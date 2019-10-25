import { Injectable } from '@angular/core';
import { AbstractService } from './abstract/abstract.service';
import { Capitulo } from '../models/capitulo.model';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';

@Injectable()
export class CapituloService  extends AbstractService<Capitulo>{

	constructor(
		public http: HttpClient,
		public localStorageService: LocalStorageService) {
		super(http, "/capitulo", localStorageService);
	}

	salvar(capitulo: Capitulo): Observable<Capitulo> {
		return this.httpPost(capitulo, '/creator');
	}
}
