import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
const ESCAPE_KEYCODE = 27;

@Component({
	selector: 'app-player',
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
	@Output() onFechar = new EventEmitter<any>();
	constructor() { }

	ngOnInit() {
	}

	fecharEmit(): void {
		this.onFechar.emit();
	}


	@HostListener('document:keydown', ['$event'])
	onKeydownHandler(event: KeyboardEvent) {
		if (event.keyCode === ESCAPE_KEYCODE) {
			console.log("aro", event);
			this.fecharEmit();
		}
	}
}
