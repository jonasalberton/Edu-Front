import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Auth } from 'src/app/core/security/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {
	@Output() menuToggle: EventEmitter<any> = new EventEmitter();
	titulo: string = 'Edu';
	constructor(private authService: Auth,
				private router: Router) {
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
}
