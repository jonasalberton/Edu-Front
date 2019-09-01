import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';0

import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';

@NgModule({
	declarations: [
		ConfiguracoesComponent
	],
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
	]
})
export class UsuarioModule { }
