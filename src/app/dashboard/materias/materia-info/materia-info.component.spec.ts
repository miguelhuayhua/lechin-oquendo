import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaInfoComponent } from './materia-info.component';

describe('MateriaInfoComponent', () => {
  let component: MateriaInfoComponent;
  let fixture: ComponentFixture<MateriaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
