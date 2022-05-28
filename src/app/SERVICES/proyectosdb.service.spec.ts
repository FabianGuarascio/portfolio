import { TestBed } from '@angular/core/testing';

import { ProyectosdbService } from './proyectosdb.service';

describe('ProyectosdbService', () => {
  let service: ProyectosdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectosdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
