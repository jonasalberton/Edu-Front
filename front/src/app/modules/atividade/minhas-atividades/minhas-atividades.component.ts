import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import { MatDialog } from '@angular/material';
import { DialogPermissaoCriadorComponent } from '../shared/dialog-permissao-criador/dialog-permissao-criador.component';
import { Router } from '@angular/router';
import { Atividade } from 'src/app/shared/models/atividade.model';
import { AtividadeService } from 'src/app/shared/service/atividade.service';
import { UtilService } from 'src/app/shared/util/util.service';

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
}
