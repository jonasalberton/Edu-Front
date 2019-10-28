import { Component, OnInit } from '@angular/core';
import { Capitulo } from 'src/app/shared/models/capitulo.model';
import { Aula } from 'src/app/shared/models/aula.model';
import { AtividadeService } from 'src/app/shared/service/atividade.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Atividade } from 'src/app/shared/models/atividade.model';
import { UtilService } from 'src/app/shared/util/util.service';

@Component({
	selector: 'app-atividade',
	templateUrl: './atividade.component.html',
	styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent implements OnInit {
	atividade: Atividade = new Atividade();
	capitulos: Array<Capitulo> = [];
	aulaEmVisualizacao: Aula;
	visualizandoPlayer = false;
	justView = false;

	constructor(
		private atividadeService: AtividadeService,
		private router: ActivatedRoute,
		private utilService: UtilService
	) { }

	ngOnInit() {
		this.getParamsOfRoute();
	}

	getParamsOfRoute(): void {
		this.router.queryParams.subscribe( 
			params => {
				this.justView = params['justView'] ? true : false;
				if(this.justView) {
					this.getAtividadeById(params['justView'])	
				} else {
					this.getAtividadeById(params['atividade'])
				}
			}
		)
	}


	getAtividadeById(id: number): void {
		this.atividadeService.getById(id).subscribe(
			_atividade => {
				this.atividade = _atividade;
			},
			erro => this.utilService.aviso('Erro ao tentar buscar os dados da atividade.')
		)
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

	visualizarPlayer(aula: Aula): void {
		this.aulaEmVisualizacao = aula;
		this.visualizandoPlayer = true;
	}

	
}
