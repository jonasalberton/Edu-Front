import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario.model';
import { AbstractService } from './abstract/abstract.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UsuarioService extends AbstractService<Usuario>{

	constructor(public http: HttpClient) {
		super(http, "/api/usuario");
	}

	autenticarUsuario(usuario: Usuario): Observable<Usuario> {
		return this.httpPost(usuario, '/autenticar');
	}
}
