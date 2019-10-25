import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Capitulo } from 'src/app/shared/models/capitulo.model';
import { CapituloService } from 'src/app/shared/service/capitulo.service';
import { UtilService } from 'src/app/shared/util/util.service';

@Component({
	selector: 'app-cadastro-capitulo',
	templateUrl: './cadastro-capitulo.component.html',
	styleUrls: ['./cadastro-capitulo.component.css']
})
export class CadastroCapituloComponent implements OnInit {
	capitulo: Capitulo;
	@Output() onCancelar = new EventEmitter();
	@Output() onCriar = new EventEmitter();

	constructor(
		private capituloService: CapituloService,
		private utilService: UtilService
	) { }

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
		this.capituloService.salvar(this.capitulo).subscribe(
			_capitulo => {
				this.capitulo = _capitulo;
				this.onCriar.emit(this.capitulo);
			},
			error => this.utilService.aviso("Erro ao salvar o capítulo")
		)

	}

}
