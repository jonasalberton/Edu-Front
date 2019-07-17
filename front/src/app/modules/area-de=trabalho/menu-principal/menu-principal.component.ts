import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-menu-principal',
	templateUrl: './menu-principal.component.html',
	styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

	constructor(public router: Router) { }

	ngOnInit() {
	}

	navigate(rota: string): void {
		this.router.navigate([rota]);
	}

}
