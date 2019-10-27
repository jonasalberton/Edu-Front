import { Component, OnInit, Input } from '@angular/core';
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
        this.solicitacao.solicitante = {id: this.solicitacao.solicitante.id} as any;
        this.solicitacaoService.permitirPublicacaoAtividade(this.solicitacao).subscribe(
            _solicitacao => {

			},
			erro => this.utilService.aviso('Erro ao permitir publicação')
        );
    }

}
