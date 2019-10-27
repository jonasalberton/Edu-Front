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
import { DirectiveModule } from 'src/app/shared/directives/directive.module';
import { FormsModule } from '@angular/forms';
import { FileService } from 'src/app/shared/service/file.service';
import { MatInputModule } from '@angular/material/input';
import { CadastroCapituloComponent } from './cadastro-capitulo/cadastro-capitulo.component';
import { CadastroAulaComponent } from './cadastro-aula/cadastro-aula.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AtividadeService } from 'src/app/shared/service/atividade.service';
import { CapituloService } from 'src/app/shared/service/capitulo.service';
import { AulaService } from 'src/app/shared/service/aula.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SolicitacaoAtividadeComponent } from './solicitacao-atividade/solicitacao-atividade.component';

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
		CadastroCapituloComponent,
		CadastroAulaComponent,
		SolicitacaoAtividadeComponent,
	],
	imports: [
		CommonModule,
		MatCardModule,
		MatIconModule,
		MatExpansionModule,
		MatButtonModule,
		MatDialogModule,
		MatMenuModule,
		DirectiveModule,
		FormsModule,
		MatInputModule,
		MatProgressSpinnerModule,
		FlexLayoutModule 
	],
	entryComponents: [
		DialogPermissaoCriadorComponent
	],
	providers: [
		FileService,
		AtividadeService,
		CapituloService,
		AulaService
	]
	
})
export class AtividadeModule { }
