import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms' ;
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import{ FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    
  }
  signinForm: FormGroup;

  ngOnInit() {
    this.signinForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
  });
  }

  onSignIn(form :NgForm){
    if (this.signinForm.valid) 
      this.authService.signInUser(form.value.email, form.value.password);
    // this.authService.getToken();
  }
}
