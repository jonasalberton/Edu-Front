import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaAtividadesComponent } from './lista-atividades/lista-atividades.component';
import { AtividadeComponent } from './atividade/atividade.component';
import { MatCardModule } from '@angular/material';
import { ListaCertificadosComponent } from './lista-certificados/lista-certificados.component';

@NgModule({
	declarations: [
		ListaAtividadesComponent,
		AtividadeComponent,
		ListaCertificadosComponent,
	],
	imports: [
		CommonModule,
		MatCardModule,
	]
})
export class AtividadeModule { }
