import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxMaterialContactsComponent} from './ngx-material-contacts.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatMenuModule,
  MatTableModule,
  MatToolbarModule,
  MatDialogModule
} from '@angular/material';

describe('NgxMaterialContactsComponent', () => {
  let component: NgxMaterialContactsComponent;
  let fixture: ComponentFixture<NgxMaterialContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatDialogModule
      ],
      declarations: [NgxMaterialContactsComponent]
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
