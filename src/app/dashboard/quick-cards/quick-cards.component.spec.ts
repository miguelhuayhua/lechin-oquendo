import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickCardsComponent } from './quick-cards.component';

describe('QuickCardsComponent', () => {
  let component: QuickCardsComponent;
  let fixture: ComponentFixture<QuickCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
