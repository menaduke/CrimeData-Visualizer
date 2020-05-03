import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimedataDetailsPageComponent } from './crimedata-details-page.component';

describe('CrimedataDetailsPageComponent', () => {
  let component: CrimedataDetailsPageComponent;
  let fixture: ComponentFixture<CrimedataDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimedataDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimedataDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
