import { Component, OnInit, ViewChild } from '@angular/core';

import { Usuario } from './../../../shared/models/usuario.model';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cadastro-usuario',
    templateUrl: './cadastro-usuario.component.html',
    styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
    usuario: Usuario = new Usuario();
    confirmacaoPassword: any

    @ViewChild('heroForm') form;
    constructor(private usuarioService: UsuarioService,
                private router: Router) { }

    ngOnInit() {
    }

    onSubmit() {
        this.usuarioService.casdastrarNovoUsuario(this.usuario).subscribe(
            success => this.router.navigate(['login']),
            error => alert('Tratar erro!')
        )
    }

    confirmarPassword(confirmacaoPassword: string): void {
        if(this.usuario.password !== confirmacaoPassword) {
            this.form.controls['confirmacao'].setErrors({'incorrect': true});
        }
    }
}
