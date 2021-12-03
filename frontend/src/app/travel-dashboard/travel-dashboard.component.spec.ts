import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelDashboardComponent } from './travel-dashboard.component';

describe('TravelDashboardComponent', () => {
  let component: TravelDashboardComponent;
  let fixture: ComponentFixture<TravelDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
