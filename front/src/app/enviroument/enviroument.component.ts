import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-enviroument',
	templateUrl: './enviroument.component.html',
	styleUrls: ['./enviroument.component.css']
})
export class EnviroumentComponent implements OnInit {
	menuAberto = false;

	constructor(private router: Router) { }

	ngOnInit() {
	}

	logout(): void {
		this.router.navigate(['/login']);
	}

	backdropclick(event) {
		console.log('event', event);
	}
}
