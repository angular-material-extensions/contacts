import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialContactMenuComponent } from './ngx-material-contact-menu.component';

describe('NgxMaterialContactMenuComponent', () => {
  let component: NgxMaterialContactMenuComponent;
  let fixture: ComponentFixture<NgxMaterialContactMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMaterialContactMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialContactMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
