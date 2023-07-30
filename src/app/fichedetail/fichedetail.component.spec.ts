import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichedetailComponent } from './fichedetail.component';

describe('FichedetailComponent', () => {
  let component: FichedetailComponent;
  let fixture: ComponentFixture<FichedetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FichedetailComponent]
    });
    fixture = TestBed.createComponent(FichedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
