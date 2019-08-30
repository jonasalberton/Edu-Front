import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/core/security/auth.service';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

	constructor(private authService: Auth) { }

	ngOnInit() {
	}

	doLogout(): void {
		this.authService.logout();
	}

}
