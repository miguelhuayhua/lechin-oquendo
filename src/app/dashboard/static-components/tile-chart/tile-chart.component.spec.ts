import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileChartComponent } from './tile-chart.component';

describe('TileChartComponent', () => {
  let component: TileChartComponent;
  let fixture: ComponentFixture<TileChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
