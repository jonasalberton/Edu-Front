import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import { MatDialog } from '@angular/material';
import { DialogPermissaoCriadorComponent } from '../shared/dialog-permissao-criador/dialog-permissao-criador.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-minhas-atividades',
    templateUrl: './minhas-atividades.component.html',
    styleUrls: ['./minhas-atividades.component.css']
})
export class MinhasAtividadesComponent implements OnInit {

    constructor(
        private usuarioService: UsuarioService,
        private router: Router,
        public dialog: MatDialog) { }

    ngOnInit() {
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogPermissaoCriadorComponent, {
        });

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
}
