import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';

import {NgxMaterialContactsNewUserComponent} from './ngx-material-contacts-new-user.component';
import {MatDialogModule, MatDialogRef, MatIconModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AvatarModule} from 'ng2-avatar';

describe('NgxMaterialContactsNewUserComponent', () => {
  let component: NgxMaterialContactsNewUserComponent;
  let fixture: ComponentFixture<NgxMaterialContactsNewUserComponent>;
  let dialog: MatDialogRef<NgxMaterialContactsNewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // animations
        NoopAnimationsModule,
        // material
        MatIconModule,
        MatToolbarModule,
        MatInputModule,
        MatDialogModule,
        // forms
        FormsModule,
        ReactiveFormsModule,
        // avatar
        AvatarModule
      ],
      declarations: [NgxMaterialContactsNewUserComponent],
      providers: [{provide: MatDialogRef, useValue: {}}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialContactsNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
