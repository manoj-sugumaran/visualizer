import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth' ;
@Injectable()
export class LoginGuard implements CanActivate{

    constructor(private auth: AngularFireAuth, private router: Router) {}

    canActivate(): Observable<boolean> {
        return this.auth.authState.map((auth) => {
            if(auth == null) {
                return true;
            } else {
                return false;
            }
        })
    }
        
    // ){
        //     this.router.navigate(['music']);
        //     return false;
        // }else {
        //     console.log()
        //     return true;
    // }
}