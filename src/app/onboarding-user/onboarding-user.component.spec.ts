import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingUserComponent } from './onboarding-user.component';

describe('OnboardingUserComponent', () => {
  let component: OnboardingUserComponent;
  let fixture: ComponentFixture<OnboardingUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnboardingUserComponent]
    });
    fixture = TestBed.createComponent(OnboardingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
