import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
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
  MatRippleModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AvatarModule} from 'ng2-avatar';

import {MatContactsComponent} from './components/contacts/mat-contacts.component';
import {MatContactMenuComponent} from './components/contacts/menu/mat-contact-menu.component';
import {MatContactDialogComponent} from './components/contacts/dialog/mat-contact-dialog.component';

// Export module's public API
export {MatContactsComponent} from './components/contacts/mat-contacts.component';
export {MatContactMenuComponent} from './components/contacts/menu/mat-contact-menu.component';
export {MatContactDialogComponent} from './components/contacts/dialog/mat-contact-dialog.component';
// interfaces
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
      MatContactsComponent,
      MatContactMenuComponent,
      MatContactDialogComponent
    ],
  entryComponents: [MatContactDialogComponent],
  exports:
    [
      FormsModule,
      ReactiveFormsModule,
      MatContactsComponent,
      MatContactMenuComponent,
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
export class MatContactsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MatContactsModule,
      providers: []
    };
  }
}

