import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Auth } from 'src/app/core/security/auth.service';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
	@Output() menuToggle: EventEmitter<any> = new EventEmitter();

	constructor(private authService: Auth) { }

	ngOnInit() {
	}

	doLogout(): void {
		this.authService.logout();
	}

	menuClicked(): void {
		this.menuToggle.emit();
	}

}
