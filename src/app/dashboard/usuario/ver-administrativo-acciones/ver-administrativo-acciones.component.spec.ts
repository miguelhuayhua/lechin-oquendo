import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAdministrativoAccionesComponent } from './ver-administrativo-acciones.component';

describe('VerAdministrativoAccionesComponent', () => {
  let component: VerAdministrativoAccionesComponent;
  let fixture: ComponentFixture<VerAdministrativoAccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerAdministrativoAccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerAdministrativoAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
