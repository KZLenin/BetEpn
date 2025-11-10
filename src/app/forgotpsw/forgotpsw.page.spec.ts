import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotpswPage } from './forgotpsw.page';

describe('ForgotpswPage', () => {
  let component: ForgotpswPage;
  let fixture: ComponentFixture<ForgotpswPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpswPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
