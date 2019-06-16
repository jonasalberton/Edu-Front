import { UsuarioService } from './../service/usuario.service';
import { AbstractService } from './../service/abstract/abstract.service';
import { Usuario } from './../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	usuario: Usuario = new Usuario();

	constructor(private router: Router,
				private usuarioService: UsuarioService) {
	 }

	ngOnInit() {
	}

	onSubmit() {
		this.usuarioService.autenticarUsuario(this.usuario).subscribe(
			usuario => {
				if(usuario !== null) {
					this.router.navigate(['/app']);
				} else {
					alert('Senha errada');
				}
			},
			error => console.log('erro', error)
		)
	}
}
