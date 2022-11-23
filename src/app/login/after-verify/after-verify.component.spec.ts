import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterVerifyComponent } from './after-verify.component';

describe('AfterVerifyComponent', () => {
  let component: AfterVerifyComponent;
  let fixture: ComponentFixture<AfterVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterVerifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
