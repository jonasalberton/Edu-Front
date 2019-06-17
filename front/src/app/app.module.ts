import { ListaAtividadesComponent } from './lista-atividades/lista-atividades.component';
import { HttpClientModule } from '@angular/common/http';
import { EnviroumentModule } from './enviroument/enviroument.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AtividadeItemListComponent } from './atividade-item-list/atividade-item-list.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		ListaAtividadesComponent,
		AtividadeItemListComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		CommonModule,
		FormsModule,
		MatButtonModule,
		EnviroumentModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
