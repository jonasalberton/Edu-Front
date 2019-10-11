import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasAtividadesComponent } from './minhas-atividades.component';

describe('MinhasAtividadesComponent', () => {
  let component: MinhasAtividadesComponent;
  let fixture: ComponentFixture<MinhasAtividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasAtividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasAtividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
