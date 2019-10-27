import { Component, OnInit } from '@angular/core';
import { Atividade } from 'src/app/shared/models/atividade.model';
import { Router } from '@angular/router';
import { AtividadeService } from 'src/app/shared/service/atividade.service';
import { UtilService } from 'src/app/shared/util/util.service';
import { FileService } from 'src/app/shared/service/file.service';

@Component({
	selector: 'app-lista-atividades',
	templateUrl: './lista-atividades.component.html',
	styleUrls: ['./lista-atividades.component.css']
})
export class ListaAtividadesComponent implements OnInit {
	atividades: Array<Atividade> = [];
	file;

	constructor(
		private router: Router,
		private utilService: UtilService,
		private atividadeService: AtividadeService) { }

	ngOnInit() {;
		this.buscarAtividades();
	}

	navegarAtividade(atividade: Atividade): void {
		this.router.navigate(['app/atividade'], {queryParams: {atividade: atividade.id}});
	}

	buscarAtividades(): void {
		this.atividadeService.buscarAtividadePublicadas().subscribe(
			_atividades => {
				this.atividades = _atividades;
			},
			erro => this.utilService.aviso('Erro ao buscar as atividades!')
		)
	}
}
