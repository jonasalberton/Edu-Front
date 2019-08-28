import { Usuario } from './../../shared/models/usuario.model';
import { environment } from './../../../environments/environment';

import { Router } from '@angular/router';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/shared/service/usuario.service';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }).append('Access-Control-Expose-Headers', 'X-Custom-header'), observe: 'response' };

@Injectable()
export class Auth {
    jwtHelper: JwtHelper = new JwtHelper();
    private HOST_API = environment.hostApi;

    constructor(public http: HttpClient,
        private router: Router,
        private localStorageService: LocalStorageService,
        private usuarioService: UsuarioService) {
    }

    loggedIn() {
        return tokenNotExpired();
    }

    login(username: string, password: string): any {
        return new Observable(observer => {
            this.getToken(this.getBody(username, password)).subscribe(
                success => {
                    this.getUsuarioByUsername(username).subscribe(
                        usuario => {
                            this.localStorageService.setUsuario(usuario);
                            observer.next();
                        }
                    )
                }
            )
        });
    }

    getToken(body: any) {
        return this.http.post<any>(`${this.HOST_API}/login`, body, httpOptions as any).pipe(
            map(response => {
                let token = response['headers'].get('Authorization');
                this.localStorageService.setToken(token);
            })
        );
    }

    getBody(username: string, password: string) {
        let usuario = new Usuario();
        usuario.username = username;
        usuario.password = password;
        return usuario;
    }

    getUsuarioByUsername(username: string): Observable<Usuario> {
        return this.usuarioService.getUsuarioByUsername(username);
    }

    logout() {

    }

}
