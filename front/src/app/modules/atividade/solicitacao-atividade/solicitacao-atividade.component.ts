import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Solicitacao } from 'src/app/shared/models/solicitacao.model';
import { SolicitacaoService } from 'src/app/shared/service/solicitacao.service';
import { UtilService } from 'src/app/shared/util/util.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-solicitacao-atividade',
	templateUrl: './solicitacao-atividade.component.html',
	styleUrls: ['./solicitacao-atividade.component.css']
})
export class SolicitacaoAtividadeComponent implements OnInit {
	@Input() solicitacao: Solicitacao;
	@Output() onRemover = new EventEmitter();

	constructor(
		private solicitacaoService: SolicitacaoService,
		private utilService: UtilService,
		private router: Router
	) { }

	ngOnInit() {
	}

	navegarParaAtividade(): void {
		this.router.navigate(['app/atividade'],{queryParams: {justView: this.solicitacao.atividade.id}});
	}

	permitir(): void {
		if (!this.solicitacao.atividade.cargaHorariaAluno) {
			alert("Selecione a carga horaria");
		} else {
			this.solicitacaoService.permitirPublicacaoAtividade(this.getSolicitacaoCopy()).subscribe(
				_solicitacao => {
					this.onRemover.emit(this.solicitacao);
				},
				erro => this.utilService.aviso('Erro ao permitir publicação')
				);
		}
	}

	negar(): void {
        this.solicitacaoService.negarPublicacaoAtividade(this.getSolicitacaoCopy()).subscribe(
            _solicitacao => {
				this.onRemover.emit(this.solicitacao);
			},
			erro => this.utilService.aviso('Erro ao permitir publicação')
        );
	}
	
	getSolicitacaoCopy(): Solicitacao {
		let solicitacao: Solicitacao = JSON.parse(JSON.stringify(this.solicitacao));
		solicitacao.solicitante = {username: this.solicitacao.solicitante.username} as any;
		solicitacao.atividade.criador = {username: this.solicitacao.solicitante.username} as any;
		return solicitacao;
	}
}
