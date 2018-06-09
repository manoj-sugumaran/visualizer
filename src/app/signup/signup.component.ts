import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms' ;
import { AuthService } from '../auth.service';
import{ FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'fname': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'lname': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'city': new FormControl(null, [Validators.required]),
      'country': new FormControl(null, [Validators.required]),
      'postal': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
      // 'confirmpassword': new FormControl(null, Validators.required)

    });
  }

  onSignUp(form :NgForm){
    if (this.signupForm.valid) {
      console.log('here');
      this.authService.signUpUser(form.value.email, form.value.password);
    }
  }

}
