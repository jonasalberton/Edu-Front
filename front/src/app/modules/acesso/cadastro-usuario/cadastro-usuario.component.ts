import { Usuario } from './../../../shared/models/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cadastro-usuario',
    templateUrl: './cadastro-usuario.component.html',
    styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
    usuario: Usuario =  new Usuario();
    
    constructor() { }

    ngOnInit() {
    }

}
