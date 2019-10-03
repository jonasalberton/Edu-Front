import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemMenu } from '../models/item-menu.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	@Output() itemSelected: EventEmitter<string> = new EventEmitter();
	itemsMenu: Array<ItemMenu> = [];

	constructor(private router: Router) {
		this.createItemsMenu();
	}

	ngOnInit() {
	}

	createItemsMenu(): void {
		this.itemsMenu.push(new ItemMenu('Atividades','atividades','app/lista-atividades'));
		this.itemsMenu.push(new ItemMenu('Minhas Atividades','minhas_atividades','app/lista-atividades'));
		this.itemsMenu.push(new ItemMenu('Certificados','certificados','app/lista-certificados'));
	}

	navegar(rota: string): void {
		this.selecionouItem();
		this.router.navigate([rota]);
	}

	selecionouItem(): void {
		this.itemSelected.emit();
	}
}
