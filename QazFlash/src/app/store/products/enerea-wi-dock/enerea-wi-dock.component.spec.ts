import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnereaWiDockComponent } from './enerea-wi-dock.component';

describe('EnereaWiDockComponent', () => {
  let component: EnereaWiDockComponent;
  let fixture: ComponentFixture<EnereaWiDockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnereaWiDockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnereaWiDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
