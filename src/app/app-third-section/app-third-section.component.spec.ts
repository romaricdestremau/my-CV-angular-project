import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppThirdSectionComponent } from './app-third-section.component';

describe('AppThirdSectionComponent', () => {
  let component: AppThirdSectionComponent;
  let fixture: ComponentFixture<AppThirdSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppThirdSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppThirdSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
