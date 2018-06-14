import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MatContactMenuComponent} from './mat-contact-menu.component';
import {FormsModule} from '@angular/forms';
import {MatCardModule, MatIconModule, MatListModule} from '@angular/material';

describe('NgxMaterialContactMenuComponent', () => {
  let component: MatContactMenuComponent;
  let fixture: ComponentFixture<MatContactMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatCardModule,
        MatListModule,
        MatIconModule
      ],
      declarations: [MatContactMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatContactMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
