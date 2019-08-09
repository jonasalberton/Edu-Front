import { Injectable } from '@angular/core';

enum KeyLocalStorage {
    TOKEN = 'TOKEN'
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
}
