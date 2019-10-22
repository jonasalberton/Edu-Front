import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SolicitacaoService } from 'src/app/shared/service/solicitacao.service';
import { UtilService } from 'src/app/shared/util/util.service';

@Component({
	selector: 'app-dialog-permissao-criador',
	templateUrl: './dialog-permissao-criador.component.html',
	styleUrls: ['./dialog-permissao-criador.component.css']
})
export class DialogPermissaoCriadorComponent {

	constructor(
		public dialogRef: MatDialogRef<DialogPermissaoCriadorComponent>,
		private solicitacaoService: SolicitacaoService,
		private utilService: UtilService,
		@Inject(MAT_DIALOG_DATA) public data: any) { }

	onNoClick(): void {
		this.dialogRef.close();
	}

	solicitarPermissaoCriador(): void {
		this.solicitacaoService.solicitarPermissaoCriador().subscribe(
			success => {
				this.dialogRef.close();
				this.utilService.aviso('Sua solicitação foi enviada com sucesso!');
			}, 
			erro => {
				this.utilService.aviso('Erro ao tentar solicitar!');
			}
		)
	}
}
