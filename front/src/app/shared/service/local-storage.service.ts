import { Usuario } from './../models/usuario.model';
import { Injectable } from '@angular/core';

enum KeyLocalStorage {
    TOKEN = 'TOKEN',
    USUARIO = 'USUARIO'
}

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    constructor() {
    }

    setToken(token: string): void {
        localStorage.setItem(KeyLocalStorage.TOKEN, token);
    }

    getToken(): string {
        return localStorage.getItem(KeyLocalStorage.TOKEN);
    }

    setUsuario(usuario: Usuario): void {
        localStorage.setItem(KeyLocalStorage.USUARIO, JSON.stringify(usuario));
    }

    getUsuario(): Usuario {
        return JSON.parse(localStorage.getItem(KeyLocalStorage.USUARIO));
    }
}
