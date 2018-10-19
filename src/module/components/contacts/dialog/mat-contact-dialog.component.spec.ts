import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';

import {MatContactDialogComponent} from './mat-contact-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, MatIconModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AvatarModule} from 'ng2-avatar';

describe('NgxMaterialContactsNewUserComponent', () => {
  let component: MatContactDialogComponent;
  let fixture: ComponentFixture<MatContactDialogComponent>;
  let dialog: MatDialogRef<MatContactDialogComponent>;

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
      declarations: [MatContactDialogComponent],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatContactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
