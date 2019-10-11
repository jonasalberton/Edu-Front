import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPermissaoCriadorComponent } from './dialog-permissao-criador.component';

describe('DialogPermissaoCriadorComponent', () => {
  let component: DialogPermissaoCriadorComponent;
  let fixture: ComponentFixture<DialogPermissaoCriadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPermissaoCriadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPermissaoCriadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
