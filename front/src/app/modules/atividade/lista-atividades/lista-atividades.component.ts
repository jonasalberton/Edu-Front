import { Component, OnInit } from '@angular/core';
import { Atividade } from 'src/app/shared/models/atividade.model';

@Component({
	selector: 'app-lista-atividades',
	templateUrl: './lista-atividades.component.html',
	styleUrls: ['./lista-atividades.component.css']
})
export class ListaAtividadesComponent implements OnInit {
	atividades: Array<Atividade> = [];
	constructor() { }

	ngOnInit() {
		this.buildAtividadesMock();
	}

	buildAtividadesMock(): void {
		let atividade =  new Atividade();
		atividade.avaliacao = 50;
		atividade.descricao = 'ABCTSSDASDasdaasd';
		atividade.nome = 'Javascript';


		this.atividades.push(atividade);
		this.atividades.push({...atividade});
		this.atividades.push({...atividade});
		this.atividades.push({...atividade});
		this.atividades.push({...atividade, nome: 'Typescript'});
		this.atividades.push({...atividade,  nome: 'Typescript'});
		this.atividades.push({...atividade,  nome: 'Java'});
		this.atividades.push({...atividade});
		this.atividades.push({...atividade});
		this.atividades.push({...atividade});
	}
}
