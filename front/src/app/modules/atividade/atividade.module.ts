import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaAtividadesComponent } from './lista-atividades/lista-atividades.component';
import { AtividadeComponent } from './atividade/atividade.component';
import { MatCardModule, MatIconModule } from '@angular/material';
import { ListaCertificadosComponent } from './lista-certificados/lista-certificados.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { PlayerComponent } from './player/player.component';
import { MinhasAtividadesComponent } from './minhas-atividades/minhas-atividades.component';
import { MatButtonModule } from '@angular/material/button';
import { DialogPermissaoCriadorComponent } from './shared/dialog-permissao-criador/dialog-permissao-criador.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ListaSolicitacoesComponent } from './lista-solicitacoes/lista-solicitacoes.component';
import { MatMenuModule } from '@angular/material/menu';
import { CadastroAtividadeComponent } from './cadastro-atividade/cadastro-atividade.component';

@NgModule({
	declarations: [
		ListaAtividadesComponent,
		AtividadeComponent,
		ListaCertificadosComponent,
		PlayerComponent,
		MinhasAtividadesComponent,
		DialogPermissaoCriadorComponent,
		ListaSolicitacoesComponent,
		CadastroAtividadeComponent,
	],
	imports: [
		CommonModule,
		MatCardModule,
		MatIconModule,
		MatExpansionModule,
		MatButtonModule,
		MatDialogModule,
		MatMenuModule,
	],
	entryComponents: [
		DialogPermissaoCriadorComponent
	]
})
export class AtividadeModule { }
