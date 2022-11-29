import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAdministrativoComponent } from './ver-administrativo.component';

describe('VerAdministrativoComponent', () => {
  let component: VerAdministrativoComponent;
  let fixture: ComponentFixture<VerAdministrativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerAdministrativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
