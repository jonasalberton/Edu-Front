import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/service/usuario.service';
import { MatDialog } from '@angular/material';
import { DialogPermissaoCriadorComponent } from '../shared/dialog-permissao-criador/dialog-permissao-criador.component';

@Component({
	selector: 'app-minhas-atividades',
	templateUrl: './minhas-atividades.component.html',
	styleUrls: ['./minhas-atividades.component.css']
})
export class MinhasAtividadesComponent implements OnInit {

	constructor(private usuarioService: UsuarioService,
		public dialog: MatDialog) { }

	ngOnInit() {
	}

	openDialog(): void {
	  const dialogRef = this.dialog.open(DialogPermissaoCriadorComponent, {
		data: {name: 'asda', animal: 'asdasdasd'}
	  });
  
	  dialogRef.afterClosed().subscribe(result => {
		console.log('The dialog was closed');
		
	  });
	}

	criarAtividade(): void {
		if(this.usuarioService.isCreator()) {
			alert('is creator');
		} else {
			this.openDialog();
		}
	}
}
