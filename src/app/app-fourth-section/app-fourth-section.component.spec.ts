import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFourthSectionComponent } from './app-fourth-section.component';

describe('AppFourthSectionComponent', () => {
  let component: AppFourthSectionComponent;
  let fixture: ComponentFixture<AppFourthSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFourthSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFourthSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
