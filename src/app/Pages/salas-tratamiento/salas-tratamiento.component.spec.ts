import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasTratamientoComponent } from './salas-tratamiento.component';

describe('SalasTratamientoComponent', () => {
  let component: SalasTratamientoComponent;
  let fixture: ComponentFixture<SalasTratamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalasTratamientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalasTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
