import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimedataCardComponent } from './crimedata-card.component';

describe('CrimedataCardComponent', () => {
  let component: CrimedataCardComponent;
  let fixture: ComponentFixture<CrimedataCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimedataCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimedataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
