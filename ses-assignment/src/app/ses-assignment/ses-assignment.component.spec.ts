import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesAssignmentComponent } from './ses-assignment.component';

describe('SesAssignmentComponent', () => {
  let component: SesAssignmentComponent;
  let fixture: ComponentFixture<SesAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
