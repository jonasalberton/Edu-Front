import { environment } from './../../../environments/environment';

import { Router } from '@angular/router';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded; charset=utf-8',
    })
  };

@Injectable()
export class Auth  { 
    jwtHelper: JwtHelper = new JwtHelper();
    private HOST_API = environment.hostApi;

    constructor(public http: HttpClient,
        private router: Router) {
    }

    loggedIn() {
        return tokenNotExpired();
    }

    login(username: string, password: string): any {
        let body = this.getBody(username, password);
        this.http.post<any>( `${this.HOST_API}/login` , body, httpOptions).subscribe(
            sucesso => 
            console.log('teste', sucesso),
            erro => console.log('erro', erro)
        );

        // return this.http.post(environment.hostApi + environment.portSecurity + '/uaa/oauth/token', body, options).pipe(
        //     map((response: Response) => {
        //         let _body = response.json();
        //         let token = _body['access_token'];
        //         this.localStorageService.setToken(token);
        //         this.getUsuarioByName(username);
        //         this.localStorageService.setCurrentUser(JSON.stringify(this.jwtHelper.decodeToken(token)));
        //     }), catchError(this.processarErros));
    }

    getBody(username: string, password: string) {
        return {'username': username, 'password': password};
    }

    logout() {
      
    }

}
