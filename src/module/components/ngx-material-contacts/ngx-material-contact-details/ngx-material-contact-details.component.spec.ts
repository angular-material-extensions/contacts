import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';

import {NgxMaterialContactDetailsComponent} from './ngx-material-contact-details.component';
import {MatDialogModule, MatDialogRef, MatIconModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AvatarModule} from 'ng2-avatar';

describe('NgxMaterialContactsNewUserComponent', () => {
  let component: NgxMaterialContactDetailsComponent;
  let fixture: ComponentFixture<NgxMaterialContactDetailsComponent>;
  let dialog: MatDialogRef<NgxMaterialContactDetailsComponent>;

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
      declarations: [NgxMaterialContactDetailsComponent],
      providers: [{provide: MatDialogRef, useValue: {}}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
