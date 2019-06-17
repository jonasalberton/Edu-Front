import { Atividade } from './../models/atividade.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'atividade-item-list',
	templateUrl: './atividade-item-list.component.html',
	styleUrls: ['./atividade-item-list.component.css']
})
export class AtividadeItemListComponent implements OnInit {
	atividade: Atividade =  new Atividade();

	constructor(private router: Router) { }

	ngOnInit() {
		this.atividade.nome = 'Curso de programação WEB Avançado PARTE 1';
		this.atividade.autor = 'Jonas Ceolin Alberton';
		this.atividade.avaliacao = '10/10';
		this.atividade.descricao = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
		this.atividade.preview = 'https://i.udemycdn.com/course/750x422/1146014_da83.jpg';
	}

	abrirAtividade(): void {
		this.router.navigate(['app/atividade']);
	}

}
