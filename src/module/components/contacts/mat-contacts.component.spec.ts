import {async, ComponentFixture, TestBed} from '@angular/core/testing';

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
import {MatContactMenuComponent} from './menu/mat-contact-menu.component';
import {FormsModule} from '@angular/forms';
import {MatContactsComponent} from './mat-contacts.component';

describe('MatContactsComponent', () => {
  let component: MatContactsComponent;
  let fixture: ComponentFixture<MatContactsComponent>;

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
          MatContactsComponent,
          MatContactMenuComponent
        ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
