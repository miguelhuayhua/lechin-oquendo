import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeStudentComponent } from './me-student.component';

describe('MeStudentComponent', () => {
  let component: MeStudentComponent;
  let fixture: ComponentFixture<MeStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
