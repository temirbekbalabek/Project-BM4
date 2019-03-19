import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargComponent } from './charg.component';

describe('ChargComponent', () => {
  let component: ChargComponent;
  let fixture: ComponentFixture<ChargComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
