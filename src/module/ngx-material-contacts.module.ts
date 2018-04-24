import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';


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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  NgxMaterialContactsNewUserComponent
} from './components/ngx-material-contacts/ngx-material-contacts-new-user/ngx-material-contacts-new-user.component';
import {NgxMaterialContactsComponent} from 'module/components/ngx-material-contacts/ngx-material-contacts.component';

// Export module's public API
export {
  NgxMaterialContactsNewUserComponent
} from './components/ngx-material-contacts/ngx-material-contacts-new-user/ngx-material-contacts-new-user.component';
export {Contact, NgxMaterialContactsComponent} from 'module/components/ngx-material-contacts/ngx-material-contacts.component';

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
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxMaterialContactsModule,
      providers: []
    };
  }
}

