import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LibModule} from 'ngx-material-contacts';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {NgxMaterialContactsModule} from './ngx-material-contacts/ngx-material-contacts.module';

@NgModule({
  imports: [
    CommonModule,
    LibModule.forRoot(),
    NgxMaterialContactsModule,
    HomeRoutingModule,
  ],
  exports: [NgxMaterialContactsModule],
  declarations: [HomeComponent],
})
export class HomeModule {
}
