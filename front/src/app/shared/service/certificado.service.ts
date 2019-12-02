import { Injectable } from '@angular/core';
import { AbstractService } from './abstract/abstract.service';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';
import { Certificado } from '../models/certificado.model';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService  extends AbstractService<any>{

	constructor(
		public http: HttpClient,
		public localStorageService: LocalStorageService) {
		super(http, "/certificado", localStorageService);
	}

	buscarTodos(): Observable<Certificado[]> {
		return this.httpGet('');
	}
	
	gerarCertificadoAluno(certificado: Certificado): Observable<Certificado> {
		return this.httpPost(certificado, '/aluno');
	}
}