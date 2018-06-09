import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/music', title: 'Music',  icon: 'library_music', class: '' },
    { path: '/today', title: 'Today',  icon:'today', class: '' },
    { path: '/free', title: 'Free',  icon:'money_off', class: '' },
    { path: '/tags', title: 'Tags & Config',  icon:'list', class: '' },
    // { path: '/user-profile', title: 'Profile',  icon:'account_circle', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor( public authService: AuthService ) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  logout(){
      this.authService.signOut();
  }
}
