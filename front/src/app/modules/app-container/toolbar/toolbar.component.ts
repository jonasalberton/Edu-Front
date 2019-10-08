import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Auth } from 'src/app/core/security/auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
	@Output() menuToggle: EventEmitter<any> = new EventEmitter();
	titulo: string = 'Edu';
	nomeUsuario: string;

	constructor(private authService: Auth,
				private router: Router,
				private localStorageService: LocalStorageService) {
				this.getNomeUsuario()
				 }

	ngOnInit() {
	}

	doLogout(): void {
		this.authService.logout();
	}

	menuClicked(): void {
		this.menuToggle.emit();
	}

	abrirConfiguracoes(): void {
		this.router.navigate(['app/configuracoes']);
	}

	getNomeUsuario(): void {
		const nome = this.localStorageService.getUsuario().nome;
		const index = nome.indexOf(' ');
		this.nomeUsuario = index >=0  ? nome.substr(0, index) : nome;
	}
}
