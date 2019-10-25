import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Capitulo } from 'src/app/shared/models/capitulo.model';

@Component({
	selector: 'app-cadastro-capitulo',
	templateUrl: './cadastro-capitulo.component.html',
	styleUrls: ['./cadastro-capitulo.component.css']
})
export class CadastroCapituloComponent implements OnInit {
	capitulo: Capitulo;
	@Output() onCancelar = new EventEmitter();
	@Output() onCriar = new EventEmitter();

	constructor() { }

	ngOnInit() {
		this.buildCapitulo();
	}

	buildCapitulo(): void {
		this.capitulo = new Capitulo();
	}

	cancelar(): void {
		this.onCancelar.emit();
	}

	criar(): void {
		this.onCriar.emit(this.capitulo);
	}

}
