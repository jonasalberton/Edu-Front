import { Component, OnInit } from '@angular/core';
import { CertificadoService } from 'src/app/shared/service/certificado.service';
import { Certificado } from 'src/app/shared/models/certificado.model';

@Component({
	selector: 'app-lista-certificados',
	templateUrl: './lista-certificados.component.html',
	styleUrls: ['./lista-certificados.component.css']
})
export class ListaCertificadosComponent implements OnInit {
	certificados: Certificado[] = [];

	constructor(
		private certificadoService: CertificadoService
	) { }

	ngOnInit() {
		this.carregarCertificados();
	}

	carregarCertificados(): void {
		this.certificadoService.buscarTodos().subscribe(
			_certificados => {
				this.certificados = _certificados;
				console.log('Certificados', _certificados);
			}
		)
	}

	printIt(certificado: Certificado) {

		let parametrosNovaAba = 'scrollbars=no,menubar=yes,'+
        'resizable,screenX=50,screenY=50,width=900,height=550';

		let html = `<div style="width:850px;
						 height:500px;
						 background-image: url(../../../../assets/certificado/modelo.png);
						 background-repeat: round;
						 border: 1px solid grey;">
					</div>
					
					<div style="position: absolute;
								top: 226px;
								font-weight: bold;
								left: 407px;
								font-size: 23px;">
						${certificado.usuario.nome}
					</div>

					<div style="font-size: 19px;
								position: absolute;
								top: 290px;
								display: block;
								width: 487px;
								left: 293px;
								text-align: justify;">
						Participou da atividade de extensão <span style="font-weight:bold"> ${certificado.atividade.titulo}</span>
						como <span style="font-weight:bold"> ${certificado.criador ? 'criador': 'aluno'}</span>
						no dia 02/12/2019 com carga horária estimada em <span style="font-weight:bold"> ${certificado.criador ? certificado.atividade.cargaHorariaCriador: certificado.atividade.cargaHorariaAluno} horas</span>
					</div>
					`; 
        let printWindow = window.open ("", "PDF", parametrosNovaAba);
		printWindow.document.write (html);

		
	}
}
