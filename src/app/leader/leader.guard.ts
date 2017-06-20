import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { userType } from '../service/userType.service';
import { CookieService } from 'angular2-cookie/core';
@Injectable()
export class AuthGuard implements CanActivate {

    private result: boolean;
    constructor(
        private router: Router,
        private usertype: userType,
        private cookie:CookieService) {

        

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        
        if(this.cookie.get("type") == "2"){
            return true;
        }else{
            return false;
        }
        
        
    }

    
}