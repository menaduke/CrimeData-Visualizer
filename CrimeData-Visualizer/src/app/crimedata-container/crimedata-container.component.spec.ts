import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimedataContainerComponent } from './crimedata-container.component';

describe('CrimedataContainerComponent', () => {
  let component: CrimedataContainerComponent;
  let fixture: ComponentFixture<CrimedataContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimedataContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimedataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
