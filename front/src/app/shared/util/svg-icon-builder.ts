import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Inject } from '@angular/core';


export class SvgIconBuilder {
    constructor(@Inject( MatIconRegistry) iconReg: MatIconRegistry, @Inject(DomSanitizer) sanitizer: DomSanitizer ) {
        iconReg.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'))
        iconReg.addSvgIcon('certificados', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/certificados.svg'))
        iconReg.addSvgIcon('account', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/account.svg'))
        iconReg.addSvgIcon('playlist', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/playlist.svg'))
        iconReg.addSvgIcon('exit', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/exit.svg'))
        iconReg.addSvgIcon('person', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/person.svg'))
        iconReg.addSvgIcon('configuracoes', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/configuracoes.svg'));
    }
}