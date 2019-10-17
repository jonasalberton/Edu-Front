import { LocalStorageService } from './local-storage.service';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract/abstract.service';
import { Injectable } from '@angular/core';
import { Usuario } from '../../shared/models/usuario.model';
import { Observable } from 'rxjs';
import { TipoPermissao } from '../models/permissao.model';

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
 
	isCreator(): boolean {
		const usuario = this.localStorageService.getUsuario();
		return usuario.permissoes.some( (p) => p.permissao === TipoPermissao.ROLE_CREATOR);
	}

	isAdmin(): boolean {
		const usuario = this.localStorageService.getUsuario();
		return usuario.permissoes.some( (p) => p.permissao === TipoPermissao.ROLE_ADMIN);
	}
}
