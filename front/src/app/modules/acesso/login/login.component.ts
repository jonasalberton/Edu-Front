import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../shared/models/usuario.model';
import { UsuarioService } from '../../../shared/service/usuario.service';

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
		this.navegarParaAppContainer();
		// this.usuarioService.autenticarUsuario(this.usuario).subscribe(
		// 	usuario => {
		// 		if(usuario !== null) {
		// 			this.router.navigate(['/app']);
		// 		} else {
		// 			alert('Senha errada');
		// 		}
		// 	},
		// 	error => console.log('erro', error)
		// )
	}

	navegarNovoCadastro(): void {
		this.router.navigate(['/cadastro-usuario']);
	}

	navegarParaAppContainer(): void {
		this.router.navigate(['/app']);
	}
}
