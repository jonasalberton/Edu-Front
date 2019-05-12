import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviroumentComponent } from './enviroument.component';

describe('EnviroumentComponent', () => {
  let component: EnviroumentComponent;
  let fixture: ComponentFixture<EnviroumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviroumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviroumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
