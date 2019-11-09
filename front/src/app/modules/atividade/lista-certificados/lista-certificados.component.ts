import { Component, OnInit } from '@angular/core';
import { CertificadoService } from 'src/app/shared/service/certificado.service';
import { Certificado } from 'src/app/shared/models/certificado.model';
import { CertificadoFactory } from './certificadoFactory';

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

		// let parametrosNovaAba = 'dependent=yes,locationbar=no,scrollbars=yes,menubar=yes,'+
        // 'resizable,screenX=50,screenY=50,width=850,height=850';

		// let html = `
		// <div style="width:300px; height:30px;">
        
        // </div>`; 
        // let printWindow = window.open ("", "PDF", parametrosNovaAba);
        // printWindow.document.write (html);

        // // necessario o setTimeout para que só chame a função print depois de renderizar o pdf
        // setTimeout(() => {
        //     let iframe = printWindow.document.body.firstElementChild;
        //     (iframe as any).contentWindow.print();
        // });

	}
}
