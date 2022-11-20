import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarEstudianteComponent } from './confirmar-estudiante.component';

describe('ConfirmarEstudianteComponent', () => {
  let component: ConfirmarEstudianteComponent;
  let fixture: ComponentFixture<ConfirmarEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
