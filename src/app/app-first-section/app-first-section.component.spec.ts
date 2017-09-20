import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFirstSectionComponent } from './app-first-section.component';

describe('AppFirstSectionComponent', () => {
  let component: AppFirstSectionComponent;
  let fixture: ComponentFixture<AppFirstSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFirstSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFirstSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
