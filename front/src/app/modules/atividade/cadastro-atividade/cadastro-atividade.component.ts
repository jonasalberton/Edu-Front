import { Component, OnInit } from '@angular/core';
import { Atividade } from 'src/app/shared/models/atividade.model';
import { FileService } from 'src/app/shared/service/file.service';
import { UtilService } from 'src/app/shared/util/util.service';
import { File } from 'src/app/shared/models/file.model';
import { Capitulo } from 'src/app/shared/models/capitulo.model';

@Component({
    selector: 'app-cadastro-atividade',
    templateUrl: './cadastro-atividade.component.html',
    styleUrls: ['./cadastro-atividade.component.css']
})
export class CadastroAtividadeComponent implements OnInit {
    atividade = new Atividade();
    cadastroCapituloVisible = false;

    constructor(
        private fileService: FileService,
        private utilService: UtilService) { }

    ngOnInit() {
        this.atividade.capitulos.push(new Capitulo());
    }

    carregouImagem(files) {
        const imagem = files.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById("imagem").setAttribute('src', (e.target as any).result);
        }
        reader.readAsDataURL(imagem);
        this.salvarImagem(imagem);
    }

    salvarImagem(imagem): void {
        this.fileService.save(imagem).subscribe(
            sucesso => {
                this.atividade.imagem = new File();
                this.atividade.imagem.id = sucesso.id;
            },
            error => this.utilService.aviso("Erro ao fazer upload da imagem!")
        );
    }
    
    criarCapitulo(): void {
        this.cadastroCapituloVisible = true;
    }

    adicionarCapitulo(capitulo: Capitulo): void {
        this.atividade.capitulos.push(capitulo);
        this.fecharCadastroCapitulo();
    }

    fecharCadastroCapitulo(): void {
        this.cadastroCapituloVisible = false;
    }
}
