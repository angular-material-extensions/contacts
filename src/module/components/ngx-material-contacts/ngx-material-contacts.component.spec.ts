import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxMaterialContactsComponent} from './ngx-material-contacts.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatMenuModule,
  MatTableModule,
  MatToolbarModule,
  MatDialogModule, MatProgressBarModule, MatListModule, MatCardModule
} from '@angular/material';
import {AvatarModule} from 'ng2-avatar';
import {NgxMaterialContactMenuComponent} from './ngx-material-contact-menu/ngx-material-contact-menu.component';
import {FormsModule} from '@angular/forms';

describe('NgxMaterialContactsComponent', () => {
  let component: NgxMaterialContactsComponent;
  let fixture: ComponentFixture<NgxMaterialContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatTableModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatIconModule,
        MatMenuModule,
        MatDialogModule,
        MatListModule,
        MatCardModule,
        AvatarModule
      ],
      declarations:
        [
          NgxMaterialContactsComponent,
          NgxMaterialContactMenuComponent
        ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
