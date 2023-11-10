import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatriCardComponent } from './patri-card.component';

describe('PatriCardComponent', () => {
  let component: PatriCardComponent;
  let fixture: ComponentFixture<PatriCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatriCardComponent]
    });
    fixture = TestBed.createComponent(PatriCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
