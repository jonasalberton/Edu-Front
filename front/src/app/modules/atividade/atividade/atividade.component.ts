import { Component, OnInit } from '@angular/core';
import { Capitulo } from 'src/app/shared/models/capitulo.model';
import { Aula } from 'src/app/shared/models/aula.model';

@Component({
	selector: 'app-atividade',
	templateUrl: './atividade.component.html',
	styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent implements OnInit {
	capitulos: Array<Capitulo> = [];
	constructor() { }

	ngOnInit() {
		this.buildCapitulos();
	}

	buildCapitulos(): void {
		let aula1 =  new Aula();
		aula1.nome = 'Introdução ao Javascript';

		let aula2 =  new Aula();
		aula2.nome = 'Aonde ele deve ser utilizado';

		let aula3 =  new Aula();
		aula3.nome = 'Primeiros Passos';

		let aula4 =  new Aula();
		aula4.nome = 'Tipos de objetos';

		let capitulo1 =  new Capitulo();
		capitulo1.nome = 'Introdução';
		capitulo1.aulas = [];
		capitulo1.aulas.push(aula1);
		capitulo1.aulas.push(aula2);

		let capitulo2 =  new Capitulo();
		capitulo2.nome = 'Primeiros Passos';
		capitulo2.aulas = [];
		capitulo2.aulas.push(aula3);
		capitulo2.aulas.push(aula4);

		this.capitulos.push(capitulo1);
		this.capitulos.push(capitulo2);
	}

}
