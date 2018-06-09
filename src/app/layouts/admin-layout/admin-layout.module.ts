import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { PlayComponent } from '../../play/play.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { HtmlDirective } from '../../html.directive';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
import { Ng2SmartTableModule} from 'ng2-smart-table';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { EmojiModule } from 'angular-emojione';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import * as $ from 'jquery';
window["$"] = $;
window["jQuery"] = $;

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    InfiniteScrollModule,
    EmojiModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    NgbModule.forRoot(),
    NgxSmartModalModule.forRoot(),
    Ng2SmartTableModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    PlayComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    HtmlDirective,
  ]
})

export class AdminLayoutModule {}
