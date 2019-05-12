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

	constructor(private router: Router) {
	 }

	ngOnInit() {
	}

	onSubmit() {
		this.router.navigate(['/app']);
	}
}
