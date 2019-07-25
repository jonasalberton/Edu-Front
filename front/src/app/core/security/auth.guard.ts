import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Auth } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private authService: Auth) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.loggedIn()) {
            return true;
        } else {
            this.router.navigate(['/login', { returnUrl: state.url }]);
            return false;
        }
    }
}
