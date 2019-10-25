import { Component, OnInit } from '@angular/core';
import { Aula } from 'src/app/shared/models/aula.model';
import { File } from 'src/app/shared/models/file.model';
import { FileService } from 'src/app/shared/service/file.service';

@Component({
	selector: 'app-cadastro-aula',
	templateUrl: './cadastro-aula.component.html',
	styleUrls: ['./cadastro-aula.component.css']
})
export class CadastroAulaComponent implements OnInit {
	aula = new Aula();

	constructor(private fileService: FileService) { }

	ngOnInit() {
		this.aula.file = new File();
	}

	carregouVideo(files) {
        const video = files.target.files[0];
		this.salvarVideo(video);
	}
	
	salvarVideo(video): void {
		this.fileService.save(video).subscribe(
			 file => {
				 console.log('deu certo');
			 }
		)
	}

}
