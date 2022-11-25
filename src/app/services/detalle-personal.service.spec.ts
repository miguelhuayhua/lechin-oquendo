import { TestBed } from '@angular/core/testing';

import { DetallePersonalService } from './detalle-personal.service';

describe('DetallePersonalService', () => {
  let service: DetallePersonalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallePersonalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
