import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialContactsNewUserComponent } from './ngx-material-contacts-new-user.component';

describe('NgxMaterialContactsNewUserComponent', () => {
  let component: NgxMaterialContactsNewUserComponent;
  let fixture: ComponentFixture<NgxMaterialContactsNewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMaterialContactsNewUserComponent ]
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
