import { Component, OnInit } from '@angular/core';
import { Capitulo } from 'src/app/shared/models/capitulo.model';
import { Aula } from 'src/app/shared/models/aula.model';
import { AtividadeService } from 'src/app/shared/service/atividade.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Atividade } from 'src/app/shared/models/atividade.model';
import { UtilService } from 'src/app/shared/util/util.service';
import { CertificadoService } from 'src/app/shared/service/certificado.service';
import { Certificado } from 'src/app/shared/models/certificado.model';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';

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
		private utilService: UtilService,
		private certificadoService: CertificadoService,
		private localStorage: LocalStorageService
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
	
	visualizarPlayer(aula: Aula): void {
		this.isUltimaAula(aula);
		this.aulaEmVisualizacao = aula;
		this.visualizandoPlayer = true;
	}

	isUltimaAula(aula: Aula): void {
		const lastCapitulo = this.atividade.capitulos[this.atividade.capitulos.length -1 ];
		const lastAula = lastCapitulo.aulas[lastCapitulo.aulas.length - 1];

		if(aula.id === lastAula.id) {
			this.buildCertificadoAluno();
		}
	}


	buildCertificadoAluno(): void {
		let certificado = new Certificado();
		certificado.criador = false;
		certificado.atividade = {id: this.atividade.id} as any;
		certificado.usuario = {username: this.localStorage.getUsuario().username} as any;

		this.certificadoService.gerarCertificadoAluno(certificado).subscribe(
			() => {
				console.log('gerou certificado');
			}
		)
	}
}
