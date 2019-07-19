import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract/abstract.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../shared/models/usuario.model';

@Injectable({
	providedIn: 'root'
})
export class UsuarioService extends AbstractService<Usuario>{

	constructor(public http: HttpClient) {
		super(http, "/usuario");
	}

	autenticarUsuario(usuario: Usuario): Observable<Usuario> {
		return this.httpPost(usuario, '/autenticar');
	}


}
