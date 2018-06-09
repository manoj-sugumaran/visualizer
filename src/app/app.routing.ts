import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { LoginGuard } from './login-guard.service';

const routes: Routes =[
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate: [LoginGuard]
  },
   {
    path: '',
    component: AdminLayoutComponent,
    canActivate : [AuthGuard],
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
    canActivate: [LoginGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true},)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
