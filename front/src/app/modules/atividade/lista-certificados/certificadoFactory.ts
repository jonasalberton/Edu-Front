import { Certificado } from 'src/app/shared/models/certificado.model';

export class CertificadoFactory {

    build(certificado: Certificado) {
        return `
        <div style="width:300px; height:30px;">
        
        </div>
        `;
    }
}