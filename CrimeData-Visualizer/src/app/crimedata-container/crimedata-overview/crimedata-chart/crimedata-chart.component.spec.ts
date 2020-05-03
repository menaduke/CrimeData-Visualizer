import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimedataChartComponent } from './crimedata-chart.component';

describe('CrimedataChartComponent', () => {
  let component: CrimedataChartComponent;
  let fixture: ComponentFixture<CrimedataChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimedataChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimedataChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
