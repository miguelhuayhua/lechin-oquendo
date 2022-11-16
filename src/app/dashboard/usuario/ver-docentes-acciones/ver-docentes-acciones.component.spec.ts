import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDocentesAccionesComponent } from './ver-docentes-acciones.component';

describe('VerDocentesAccionesComponent', () => {
  let component: VerDocentesAccionesComponent;
  let fixture: ComponentFixture<VerDocentesAccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDocentesAccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerDocentesAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
