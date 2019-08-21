import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../shared/models/usuario.model';
import { Auth } from 'src/app/core/security/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	usuario: Usuario = new Usuario();

	constructor(private router: Router,
				private authService: Auth) {
	 }

	ngOnInit() {
	}

	onSubmit() {
		this.authService.login(this.usuario.email, this.usuario.senha)
		.subscribe(
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

	navegarNovoCadastro(): void {
		this.router.navigate(['/cadastro-usuario']);
	}

	navegarParaAppContainer(): void {
		this.router.navigate(['/app']);
	}
}
