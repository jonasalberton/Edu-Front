

import { Router } from '@angular/router';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'my-auth-token'
    })
  };

@Injectable()
export class Auth {

    jwtHelper: JwtHelper = new JwtHelper();

    constructor(public http: HttpClient,
        private router: Router,) {
    }

    loggedIn() {
        return tokenNotExpired();
    }

    login(username: string, password: string) {
        
     
        let body = this.getBody(username, password);

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
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('grant_type', 'password');
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        return urlSearchParams.toString();
    }

    logout() {
      
    }

}
