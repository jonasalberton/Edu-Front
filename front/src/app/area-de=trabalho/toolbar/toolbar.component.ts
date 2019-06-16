import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
	@Output() clickMenuEvent: EventEmitter<any> =  new EventEmitter();

	constructor(private router: Router) { }

	ngOnInit() {
	}


	logout(): void {
		this.router.navigate(['/login']);
	}

	clickMenu() {
		this.clickMenuEvent.emit();
	}

}
