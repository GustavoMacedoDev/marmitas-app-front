import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOpcoesPedidoComponent } from './lista-opcoes-pedido.component';

describe('ListaOpcoesPedidoComponent', () => {
  let component: ListaOpcoesPedidoComponent;
  let fixture: ComponentFixture<ListaOpcoesPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOpcoesPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOpcoesPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
