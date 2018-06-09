import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth' ;
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthService{
    authState: any = null;

    constructor(private router: Router, private firebaseAuth: AngularFireAuth){
        this.firebaseAuth.authState.subscribe((auth) => {
            this.authState = auth
          });
    }

    signUpUser(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then( response =>{
            this.router.navigate(['music']);
        })
        .catch(
            error => alert(error)
        )
    }

    signInUser(email: string, password: string){
        
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then( reponse =>{
            this.router.navigate(['music']);
        })
        .catch(
            error => alert(error)
        )

    }

    getToken(){
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ false).then(function(idToken) {
            this.token = idToken;
            return this.token;            
          }).catch(function(error) {
            console.log(error);
        });
    }
    isAuthenticated(){
        return this.firebaseAuth.authState.map((auth) => {
            if(auth == null) {
                console.log(false);
                return false;
            } else {
                console.log(true);
                return true;
            }
        })
    }

    isLoginAuthenticated(){
        return this.authState !== null;
    }
    signOut(){
        firebase.auth().signOut();
        this.authState = null;
        this.router.navigate(['login']);
    }
}