import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';


import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatRippleModule, MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AvatarModule} from 'ng2-avatar';
import {
  NgxMaterialContactDetailsComponent
} from './components/ngx-material-contacts/ngx-material-contact-details/ngx-material-contact-details.component';
import {NgxMaterialContactsComponent} from './components/ngx-material-contacts/ngx-material-contacts.component';
import {
  NgxMaterialContactMenuComponent
} from './components/ngx-material-contacts/ngx-material-contact-menu/ngx-material-contact-menu.component';

// Export module's public API
export {
  NgxMaterialContactDetailsComponent
} from './components/ngx-material-contacts/ngx-material-contact-details/ngx-material-contact-details.component';
export {
  NgxMaterialContactsComponent
}from './components/ngx-material-contacts/ngx-material-contacts.component';
export {
  NgxMaterialContactMenuComponent
} from './components/ngx-material-contacts/ngx-material-contact-menu/ngx-material-contact-menu.component';
// intefaces
export {Contact} from './interfaces'
// enums
export {Methods} from './enums';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatRippleModule,
    MatDialogModule,
    MatListModule,
    MatSortModule,
    AvatarModule
  ],
  declarations:
    [
      NgxMaterialContactsComponent,
      NgxMaterialContactDetailsComponent,
      NgxMaterialContactMenuComponent
    ],
  entryComponents: [NgxMaterialContactDetailsComponent],
  exports:
    [
      FormsModule,
      ReactiveFormsModule,
      NgxMaterialContactsComponent,
      NgxMaterialContactMenuComponent,
      FlexLayoutModule,
      MatTableModule,
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatProgressBarModule,
      MatInputModule,
      MatIconModule,
      MatMenuModule,
      MatTooltipModule,
      MatRippleModule,
      MatDialogModule,
      MatListModule,
      MatSortModule,
      AvatarModule
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

