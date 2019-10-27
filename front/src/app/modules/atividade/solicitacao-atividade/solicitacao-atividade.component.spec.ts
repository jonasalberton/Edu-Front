import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoAtividadeComponent } from './solicitacao-atividade.component';

describe('SolicitacaoAtividadeComponent', () => {
  let component: SolicitacaoAtividadeComponent;
  let fixture: ComponentFixture<SolicitacaoAtividadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitacaoAtividadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaoAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
