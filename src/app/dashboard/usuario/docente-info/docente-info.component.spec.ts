import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteInfoComponent } from './docente-info.component';

describe('DocenteInfoComponent', () => {
  let component: DocenteInfoComponent;
  let fixture: ComponentFixture<DocenteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocenteInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocenteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
