import { Component, OnInit } from '@angular/core';
import { Atividade } from 'src/app/shared/models/atividade.model';
import { FileService } from 'src/app/shared/service/file.service';
import { UtilService } from 'src/app/shared/util/util.service';
import { File } from 'src/app/shared/models/file.model';
import { Capitulo } from 'src/app/shared/models/capitulo.model';
import { Aula } from 'src/app/shared/models/aula.model';
import { AtividadeService } from 'src/app/shared/service/atividade.service';
import { LocalStorageService } from 'src/app/shared/service/local-storage.service';
import { CapituloService } from 'src/app/shared/service/capitulo.service';
import { StatusSolicicao } from 'src/app/shared/models/solicitacao.model';

@Component({
    selector: 'app-cadastro-atividade',
    templateUrl: './cadastro-atividade.component.html',
    styleUrls: ['./cadastro-atividade.component.css']
})
export class CadastroAtividadeComponent implements OnInit {
    atividade = new Atividade();
    cadastroCapituloVisible = false;
    cadastroAulaVisible = false;

    constructor(
        private fileService: FileService,
        private utilService: UtilService,
        private atividadeService: AtividadeService,
        private capituloService: CapituloService,
        private localStorageService: LocalStorageService) { }

    ngOnInit() {
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

    adicionarAula(aula: Aula, capitulo: Capitulo): void {
        if (!capitulo.aulas) capitulo.aulas = [];

        capitulo.aulas.push(aula);
        this.atualizarCapitulo(capitulo);
        this.fecharCadastroAula();
    }

    atualizarCapitulo(capitulo: Capitulo): void {
        this.capituloService.salvar(capitulo).subscribe(
            _capitulo => {
                capitulo = _capitulo;
            },
            erro => this.utilService.aviso('Erro ao atualizar o capitulo')
        )
    }

    fecharCadastroAula(): void {
        this.cadastroAulaVisible = false;
    }

    criarAula(): void {
        this.cadastroAulaVisible = true;
    }

    salvarAtividade(): void {
        this.setMeAsCReator();
        this.atividade.status = StatusSolicicao.PENDENTE;
        this.atividadeService.salvar(this.atividade).subscribe(
            _atividade =>  {
                this.utilService.aviso('Atividade salva com sucesso!');
            },
            erro => this.utilService.aviso('Erro ao tentar salvar Atividade')
        )
    }

    setMeAsCReator(): void {
        this.atividade.criador =  this.localStorageService.getUsuario();
    }
}
