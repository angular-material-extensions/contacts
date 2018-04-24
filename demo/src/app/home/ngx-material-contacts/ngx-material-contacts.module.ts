import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxMaterialContactsComponent} from './ngx-material-contacts.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCheckboxModule, MatDialogModule,
  MatIconModule, MatInputModule,
  MatMenuModule, MatRippleModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {NgxMaterialContactsNewUserComponent} from './ngx-material-contacts-new-user/ngx-material-contacts-new-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatRippleModule,
    MatDialogModule
  ],
  declarations: [NgxMaterialContactsComponent, NgxMaterialContactsNewUserComponent],
  entryComponents: [NgxMaterialContactsNewUserComponent],
  exports:
    [
      FormsModule,
      ReactiveFormsModule,
      NgxMaterialContactsComponent,
      FlexLayoutModule,
      MatTableModule,
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatInputModule,
      MatIconModule,
      MatMenuModule,
      MatTooltipModule,
      MatRippleModule,
      MatDialogModule
    ]
})
export class NgxMaterialContactsModule {
}
