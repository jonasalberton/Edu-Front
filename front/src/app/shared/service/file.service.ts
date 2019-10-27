import { Injectable } from '@angular/core';
import { AbstractService } from './abstract/abstract.service';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs';

@Injectable()
export class FileService extends AbstractService<any>{

    constructor(public http: HttpClient,
        public localStorageService: LocalStorageService) {
        super(http, "/file", localStorageService);
    }

    save(file: any): Observable<any> {
        let formData =  new FormData();
        formData.append("file", file);
        return this.httpPostFile(formData, '/uploadFile');
    }

    download(nome: string): Observable<any> {
        return this.httpGetFile('/downloadFile/wallpaper.png');
    }
}
