import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-enviroument',
	templateUrl: './enviroument.component.html',
	styleUrls: ['./enviroument.component.css']
})
export class EnviroumentComponent implements OnInit {
	status = true;

	constructor(private router: Router) { }

	ngOnInit() {
	}

	logout(): void {
		this.router.navigate(['/login']);
	}

	changeClassSidenav() {
		this.status = !this.status;
	}
}
