import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';

@Component({
	selector: 'app-configuracoes',
	templateUrl: './configuracoes.component.html',
	styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {
	usuario: Usuario =  new Usuario;

	constructor(private localStorageService: LocalStorageService) { }

	ngOnInit() {
		this.buscarUsuario();
	}

	buscarUsuario(): void {
		this.usuario = this.localStorageService.getUsuario();
	}
}
