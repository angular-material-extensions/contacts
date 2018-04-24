import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialContactsComponent } from './ngx-material-contacts.component';

describe('NgxMaterialContactsComponent', () => {
  let component: NgxMaterialContactsComponent;
  let fixture: ComponentFixture<NgxMaterialContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMaterialContactsComponent ]
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
