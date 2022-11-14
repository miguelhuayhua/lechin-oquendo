import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoActionsComponent } from './user-info-actions.component';

describe('UserInfoActionsComponent', () => {
  let component: UserInfoActionsComponent;
  let fixture: ComponentFixture<UserInfoActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInfoActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
