import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsHeaderComponent } from './complaints-header.component';

describe('ComplaintsHeaderComponent', () => {
  let component: ComplaintsHeaderComponent;
  let fixture: ComponentFixture<ComplaintsHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplaintsHeaderComponent]
    });
    fixture = TestBed.createComponent(ComplaintsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
