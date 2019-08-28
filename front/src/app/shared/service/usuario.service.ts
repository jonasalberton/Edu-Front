import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract/abstract.service';
import { Injectable } from '@angular/core';
import { Usuario } from '../../shared/models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UsuarioService extends AbstractService<Usuario>{

	constructor(public http: HttpClient,
				public localStorageService: LocalStorageService) {
		super(http, "/usuario", localStorageService);
	}

	getUsuarioByUsername(username): Observable<Usuario> {
		return this.httpGet(`/${username}`);
	}

	casdastrarNovoUsuario(usuario: Usuario): Observable<Usuario> {
		return this.httpPost(usuario, '');
	}
}
