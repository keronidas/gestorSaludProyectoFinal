import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSalaTratamientoComponent } from './new-sala-tratamiento.component';

describe('NewSalaTratamientoComponent', () => {
  let component: NewSalaTratamientoComponent;
  let fixture: ComponentFixture<NewSalaTratamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewSalaTratamientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewSalaTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
