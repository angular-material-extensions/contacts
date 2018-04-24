import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {NgxMaterialContactsModule} from 'ngx-material-contacts';

@NgModule({
  imports: [
    CommonModule,
    NgxMaterialContactsModule.forRoot(),
    HomeRoutingModule,
  ],
  exports: [NgxMaterialContactsModule],
  declarations: [HomeComponent],
})
export class HomeModule {
}
