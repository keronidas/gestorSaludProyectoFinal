import { TestBed } from '@angular/core/testing';

import { SalasTratamientoService } from './salas-tratamiento.service';

describe('SalasTratamientoService', () => {
  let service: SalasTratamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalasTratamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
