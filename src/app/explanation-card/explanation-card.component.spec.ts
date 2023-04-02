import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationCardComponent } from './explanation-card.component';

describe('ExplanationCardComponent', () => {
  let component: ExplanationCardComponent;
  let fixture: ComponentFixture<ExplanationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplanationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplanationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
