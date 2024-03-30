import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSesionComponent } from './new-sesion.component';

describe('NewSesionComponent', () => {
  let component: NewSesionComponent;
  let fixture: ComponentFixture<NewSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewSesionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
