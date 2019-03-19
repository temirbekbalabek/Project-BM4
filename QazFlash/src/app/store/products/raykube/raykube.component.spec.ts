import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaykubeComponent } from './raykube.component';

describe('RaykubeComponent', () => {
  let component: RaykubeComponent;
  let fixture: ComponentFixture<RaykubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaykubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaykubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
