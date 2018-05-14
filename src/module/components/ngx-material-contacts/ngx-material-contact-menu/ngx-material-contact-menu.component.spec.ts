import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxMaterialContactMenuComponent} from './ngx-material-contact-menu.component';
import {FormsModule} from '@angular/forms';
import {MatCardModule, MatIconModule, MatListModule} from '@angular/material';

describe('NgxMaterialContactMenuComponent', () => {
  let component: NgxMaterialContactMenuComponent;
  let fixture: ComponentFixture<NgxMaterialContactMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatCardModule,
        MatListModule,
        MatIconModule
      ],
      declarations: [NgxMaterialContactMenuComponent]
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
