import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxMaterialContactsComponent} from './ngx-material-contacts.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCheckboxModule, MatTableModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTableModule,
    MatCheckboxModule
  ],
  declarations: [NgxMaterialContactsComponent],
  exports:
    [
      NgxMaterialContactsComponent,
      FlexLayoutModule,
      MatTableModule,
      MatCheckboxModule,
      MatToolbarModule
    ]
})
export class NgxMaterialContactsModule {
}
