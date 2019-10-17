import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Auth } from './auth.service';
import { UsuarioService } from 'src/app/shared/service/usuario.service';


@Injectable()
export class AuthGuardAdmin implements CanActivate {

    constructor(private router: Router,
                private authService: Auth,
                private usuarioService: UsuarioService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.loggedIn() && this.usuarioService.isAdmin()) {
            return true;
        } else {
            this.router.navigate(['/app/lista-atividades', { returnUrl: state.url }]);
             return false;
        }
    }
}
