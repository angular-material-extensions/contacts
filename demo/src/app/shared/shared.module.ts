import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentWrapperComponent} from './content-wrapper/content-wrapper.component';
import {
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatButtonModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DisqusModule} from 'ngx-disqus';
import {HighlightModule} from 'ngx-highlightjs';
import {NgxMaterialPagesModule} from 'ngx-material-pages';
import {NgxMaterialContactsModule} from 'ngx-material-contacts';

@NgModule({
  imports: [
    RouterModule,
    NgbCollapseModule.forRoot(),
    NgxMaterialContactsModule.forRoot(),
    NgxMaterialPagesModule.forRoot(),
    DisqusModule.forRoot('ngx-material-contacts'),
    HighlightModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentWrapperComponent,
    NgxMaterialContactsModule,
    NgxMaterialPagesModule,
    DisqusModule,
    HighlightModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  declarations: [HeaderComponent, FooterComponent, ContentWrapperComponent],
  providers: [],
})
export class AppSharedModule {
}
