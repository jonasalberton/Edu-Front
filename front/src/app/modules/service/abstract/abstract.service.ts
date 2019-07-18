import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
        return this.httpGet(`/${id}`);
    }

    getAll(path?: string): Observable<T> {
        return this.httpGet(path);
    }

    deleteById(id: string): Observable<T> {
		return this.httpDelete(`/${id}`);
    }

    httpGet(path: string): Observable<T> {
        return this.http.get<T>(this.getUrl() + path, httpOptions);
    }

    httpPost(objeto: T, path: string): Observable<T> {
        return this.http.post<T>(this.getUrl() + path, objeto, httpOptions);
    }

    httpPut(objeto: T, path: string): Observable<T> {
        return this.http.put<T>(this.getUrl() + path, objeto, httpOptions);
    }

    httpDelete(path: string): Observable<T> {
        return this.http.delete<T>(`${this.getUrl()}${path} `  + path, httpOptions);
    }
    private getUrl() {
        return `${this.HOST_API}${this.URI}`;
    }

}
