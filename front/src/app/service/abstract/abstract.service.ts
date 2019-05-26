import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario.model';
import { Observable } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable({
    providedIn: 'root'
})
export class AbstractService<T> {
    private HOST_API = environment.hostApi;
    private URI: string;

    constructor(public http: HttpClient,
        private uri) {
        this.URI = uri;
    }

    save(objeto: T): Observable<T> {
        return this.http.post<T>(this.getUrl(), objeto, httpOptions);
    }

    getById(id: any): Observable<T> {
        return this.http.get<T>(this.getUrl() + `/${id}`, httpOptions);
    }

    httpPost(objeto: T, path: string): Observable<T> {
        return this.http.post<T>(this.getUrl() + path, objeto, httpOptions);
    }

    private getUrl() {
        return `${this.HOST_API}${this.URI}`;
    }

}
