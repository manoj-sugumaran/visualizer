import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }
  role = 'Admin';
  username = 'Manoj Kumar S';
  description = 'I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.';
  
  
  ngOnInit() {
  }
  updateProfile(){
    // this.username = <HTMLInputElement>document.getElementById('formFname')).value + <HTMLInputElement>document.getElementById('formFname')).value.;
  }
}
