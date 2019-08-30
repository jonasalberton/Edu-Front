import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-app-container',
	templateUrl: './app-container.component.html',
	styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {
	status = true;

	constructor() { }

	ngOnInit() {
	}

	changeClassSidenav() {
		this.status = !this.status;
	}

}
