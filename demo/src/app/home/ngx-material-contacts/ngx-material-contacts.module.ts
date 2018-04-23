import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxMaterialContactsComponent} from './ngx-material-contacts.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatMenuModule, MatRippleModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { NgxMaterialContactsNewUserComponent } from './ngx-material-contacts-new-user/ngx-material-contacts-new-user.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatRippleModule
  ],
  declarations: [NgxMaterialContactsComponent, NgxMaterialContactsNewUserComponent],
  exports:
    [
      NgxMaterialContactsComponent,
      FlexLayoutModule,
      MatTableModule,
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      MatTooltipModule,
      MatRippleModule
    ]
})
export class NgxMaterialContactsModule {
}
