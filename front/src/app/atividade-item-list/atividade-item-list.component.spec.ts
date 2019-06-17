import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeItemListComponent } from './atividade-item-list.component';

describe('AtividadeItemListComponent', () => {
  let component: AtividadeItemListComponent;
  let fixture: ComponentFixture<AtividadeItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadeItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
