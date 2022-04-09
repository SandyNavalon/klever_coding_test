import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCreateMarksComponent } from './student-create-marks.component';

describe('StudentCreateMarksComponent', () => {
  let component: StudentCreateMarksComponent;
  let fixture: ComponentFixture<StudentCreateMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCreateMarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCreateMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
