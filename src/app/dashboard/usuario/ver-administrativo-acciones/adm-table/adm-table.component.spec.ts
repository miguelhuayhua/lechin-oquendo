import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmTableComponent } from './adm-table.component';

describe('AdmTableComponent', () => {
  let component: AdmTableComponent;
  let fixture: ComponentFixture<AdmTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
