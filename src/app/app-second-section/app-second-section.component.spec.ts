import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSecondSectionComponent } from './app-second-section.component';

describe('AppSecondSectionComponent', () => {
  let component: AppSecondSectionComponent;
  let fixture: ComponentFixture<AppSecondSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSecondSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSecondSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
