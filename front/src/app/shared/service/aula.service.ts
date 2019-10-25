import { Injectable } from '@angular/core';
import { AbstractService } from './abstract/abstract.service';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Aula } from '../models/aula.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AulaService  extends AbstractService<Aula>{

	constructor(
		public http: HttpClient,
		public localStorageService: LocalStorageService) {
		super(http, "/aula", localStorageService);
	}

	salvar(aula: Aula): Observable<Aula> {
		return this.httpPost(aula, '/creator');
  }
}