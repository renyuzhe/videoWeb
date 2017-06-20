import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { CookieService } from 'angular2-cookie/core';
@Injectable()
export class PlayGuard implements CanActivate {

    private result: boolean;
    constructor(
        private router: Router,

        private cookie: CookieService) {



    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (this.cookie.get("type") == "0") {
            return true;
        } else {
            return false;
        }


    }


}