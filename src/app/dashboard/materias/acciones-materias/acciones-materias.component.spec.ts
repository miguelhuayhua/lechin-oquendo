import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesMateriasComponent } from './acciones-materias.component';

describe('AccionesMateriasComponent', () => {
  let component: AccionesMateriasComponent;
  let fixture: ComponentFixture<AccionesMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccionesMateriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccionesMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
