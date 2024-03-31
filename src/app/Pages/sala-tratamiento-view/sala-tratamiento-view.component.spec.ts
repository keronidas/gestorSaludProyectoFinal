import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaTratamientoViewComponent } from './sala-tratamiento-view.component';

describe('SalaTratamientoViewComponent', () => {
  let component: SalaTratamientoViewComponent;
  let fixture: ComponentFixture<SalaTratamientoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalaTratamientoViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalaTratamientoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
