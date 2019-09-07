import { Component, OnInit } from '@angular/core';
import { Atividade } from 'src/app/shared/models/atividade.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-lista-atividades',
	templateUrl: './lista-atividades.component.html',
	styleUrls: ['./lista-atividades.component.css']
})
export class ListaAtividadesComponent implements OnInit {
	atividades: Array<Atividade> = [];

	constructor(private router: Router) { }

	ngOnInit() {
		this.buildAtividadesMock();
	}

	buildAtividadesMock(): void {
		let atividade = new Atividade();
		atividade.avaliacao = 50;
		atividade.descricao = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book';
		atividade.nome = 'Javascript';


		this.atividades.push(atividade);
		this.atividades.push({ ...atividade });
		this.atividades.push({ ...atividade });
		this.atividades.push({ ...atividade });
		this.atividades.push({ ...atividade, nome: 'Typescript' });
		this.atividades.push({ ...atividade, nome: 'Typescript' });
		this.atividades.push({ ...atividade, nome: 'Java' });
		this.atividades.push({ ...atividade });
		this.atividades.push({ ...atividade });
		this.atividades.push({ ...atividade });
	}

	navegarAtividade(atividade: Atividade): void {
		this.router.navigate(['app/atividade']);
	}
}
