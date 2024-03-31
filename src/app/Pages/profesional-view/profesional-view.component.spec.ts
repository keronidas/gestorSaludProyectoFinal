import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalViewComponent } from './profesional-view.component';

describe('ProfesionalViewComponent', () => {
  let component: ProfesionalViewComponent;
  let fixture: ComponentFixture<ProfesionalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfesionalViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfesionalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
