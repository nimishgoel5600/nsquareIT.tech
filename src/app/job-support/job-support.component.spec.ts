import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSupportComponent } from './job-support.component';

describe('JobSupportComponent', () => {
  let component: JobSupportComponent;
  let fixture: ComponentFixture<JobSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
