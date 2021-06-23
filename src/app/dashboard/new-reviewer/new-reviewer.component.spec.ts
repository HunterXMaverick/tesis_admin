import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewReviewerComponent } from './new-reviewer.component';

describe('NewReviewerComponent', () => {
  let component: NewReviewerComponent;
  let fixture: ComponentFixture<NewReviewerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
