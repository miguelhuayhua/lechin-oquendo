import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEstudiantesAccionesComponent } from './ver-estudiantes-acciones.component';

describe('VerEstudiantesAccionesComponent', () => {
  let component: VerEstudiantesAccionesComponent;
  let fixture: ComponentFixture<VerEstudiantesAccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEstudiantesAccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerEstudiantesAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
