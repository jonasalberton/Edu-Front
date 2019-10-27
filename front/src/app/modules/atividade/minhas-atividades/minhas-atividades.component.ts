import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import { MatDialog } from '@angular/material';
import { DialogPermissaoCriadorComponent } from '../shared/dialog-permissao-criador/dialog-permissao-criador.component';
import { Router } from '@angular/router';
import { Atividade } from 'src/app/shared/models/atividade.model';
import { AtividadeService } from 'src/app/shared/service/atividade.service';
import { UtilService } from 'src/app/shared/util/util.service';
import { StatusSolicicao } from 'src/app/shared/models/solicitacao.model';
import { SolicitacaoService } from 'src/app/shared/service/solicitacao.service';

@Component({
    selector: 'app-minhas-atividades',
    templateUrl: './minhas-atividades.component.html',
    styleUrls: ['./minhas-atividades.component.css']
})
export class MinhasAtividadesComponent implements OnInit {
    atividades: Atividade[] = [];

    constructor(
        private usuarioService: UsuarioService,
        private atividadeService: AtividadeService,
        private solicitacaoService: SolicitacaoService,
        private utilService: UtilService,
        private router: Router,
        public dialog: MatDialog) { }

    ngOnInit() {
        this.carregarMinhasAtividades();
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogPermissaoCriadorComponent, {});
        dialogRef.afterClosed().subscribe(result => { 
        });
    }

    criarAtividade(): void {
        if (this.usuarioService.isCreator()) {
          this.navegarNovoCadastro();
        } else {
            this.openDialog();
        }
    }

    navegarNovoCadastro(): void {
        this.router.navigate(['/app/cadastro-atividade']);
    }

    carregarMinhasAtividades(): void {
        this.atividadeService.buscarPorUsuario().subscribe(
            _atividades => {
                this.atividades = _atividades;
            },
            erro => this.utilService.aviso('Falha ao buscar as atividades do usuario')
        )
    }

    getStatusText(status: StatusSolicicao): string {
        switch (status) {
            case StatusSolicicao.ACEITA:
                return 'Aceita'
            case StatusSolicicao.NEGADA:
                return 'Negada'
            case StatusSolicicao.PENDENTE:
                return 'Pendente'
            case StatusSolicicao.ENVIADA_PARA_ANALISE:
                return 'Enviada para análise'
            default:
                break;
        }
    }

    solicitarPublicao(atividade: Atividade): void {
        atividade.status = StatusSolicicao.ENVIADA_PARA_ANALISE;
        atividade.criador = { username: atividade.criador.username} as any;
        this.solicitacaoService.solicitarPermissaoPublicacao(atividade).subscribe(
            _solicitacao => {
                this.utilService.aviso('Solicitação enviada com sucesso');
            },
            erro => this.utilService.aviso('Erro ao criar solicitação')
        )
    }
}
