import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCapituloComponent } from './cadastro-capitulo.component';

describe('CadastroCapituloComponent', () => {
  let component: CadastroCapituloComponent;
  let fixture: ComponentFixture<CadastroCapituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroCapituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCapituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
