import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimedataOverviewComponent } from './crimedata-overview.component';

describe('CrimedataOverviewComponent', () => {
  let component: CrimedataOverviewComponent;
  let fixture: ComponentFixture<CrimedataOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimedataOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimedataOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
