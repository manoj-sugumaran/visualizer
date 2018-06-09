import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth' ;

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private auth: AngularFireAuth, private router: Router) {}


        canActivate(): Observable<boolean> {
        return this.auth.authState
            .take(1)
            .map(authState => !!authState)
            .do(authenticated => !authenticated ? this.router.navigate(['login']) : true);
        }

}