import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceeComponent } from './servicee.component';

describe('ServiceeComponent', () => {
  let component: ServiceeComponent;
  let fixture: ComponentFixture<ServiceeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
