import { Usuario } from './../../../shared/models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/service/usuario.service';

@Component({
    selector: 'app-cadastro-usuario',
    templateUrl: './cadastro-usuario.component.html',
    styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
    usuario: Usuario = new Usuario();

    constructor(private usuarioService: UsuarioService) { }

    ngOnInit() {
    }

    onSubmit() {
        this.usuarioService.casdastrarNovoUsuario(this.usuario).subscribe(
            success => {
                console.log('Deu certo porra!', success);
            }
        )
    }

}
