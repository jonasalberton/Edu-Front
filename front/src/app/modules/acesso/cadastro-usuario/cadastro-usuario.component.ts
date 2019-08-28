import { Component, OnInit, ViewChild } from '@angular/core';

import { Usuario } from './../../../shared/models/usuario.model';
import { UsuarioService } from 'src/app/shared/service/usuario.service';

@Component({
    selector: 'app-cadastro-usuario',
    templateUrl: './cadastro-usuario.component.html',
    styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
    usuario: Usuario = new Usuario();
    confirmacaoPassword: any

    @ViewChild('heroForm') form;
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

    confirmarPassword(confirmacaoPassword: string): void {
        if(this.usuario.password !== confirmacaoPassword) {
            this.form.controls['confirmacao'].setErrors({'incorrect': true});
        }
    }
}
