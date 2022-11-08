import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartHomeComponent } from './line-chart-home.component';

describe('LineChartHomeComponent', () => {
  let component: LineChartHomeComponent;
  let fixture: ComponentFixture<LineChartHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
