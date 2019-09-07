import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaAtividadesComponent } from './lista-atividades/lista-atividades.component';
import { AtividadeComponent } from './atividade/atividade.component';
import { MatCardModule } from '@angular/material';

@NgModule({
	declarations: [
		ListaAtividadesComponent,
		AtividadeComponent,
	],
	imports: [
		CommonModule,
		MatCardModule,
	]
})
export class AtividadeModule { }
