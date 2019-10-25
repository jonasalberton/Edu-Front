import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Aula } from 'src/app/shared/models/aula.model';
import { File } from 'src/app/shared/models/file.model';
import { FileService } from 'src/app/shared/service/file.service';
import { UtilService } from 'src/app/shared/util/util.service';
import { AulaService } from 'src/app/shared/service/aula.service';

@Component({
	selector: 'app-cadastro-aula',
	templateUrl: './cadastro-aula.component.html',
	styleUrls: ['./cadastro-aula.component.css']
})
export class CadastroAulaComponent implements OnInit {
	@Output() onCriarAula = new EventEmitter();
	@Output() onCancelar = new EventEmitter();

	aula = new Aula();
	carregandoFile = false;

	constructor(
		private fileService: FileService,
		private utilService: UtilService,
		private aulaService: AulaService,
		) { }

	ngOnInit() {
		this.aula.file = new File();
	}

	carregouVideo(files) {
		const video = files.target.files[0];
		this.carregandoFile = true;
		this.salvarVideo(video);
	}
	
	salvarVideo(video): void {
		this.fileService.save(video).subscribe(
			 file => {
				 this.aula.file = {...file};
				 this.carregandoFile = false;
			 },
			 error => this.utilService.aviso("Erro ao Fazer o upload do video")
		)
	}

	cancelar(): void {
		this.onCancelar.emit();
	}

	criar(): void {
		this.aulaService.salvar(this.aula).subscribe(
			_aula => {
				this.aula = _aula;
				this.onCriarAula.emit(this.aula);
			},
			erro => this.utilService.aviso('Erro ao salvar aula!')
		)
	}
}
