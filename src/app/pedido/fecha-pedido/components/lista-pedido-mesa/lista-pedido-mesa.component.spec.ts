import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPedidoMesaComponent } from './lista-pedido-mesa.component';

describe('ListaPedidoMesaComponent', () => {
  let component: ListaPedidoMesaComponent;
  let fixture: ComponentFixture<ListaPedidoMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPedidoMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPedidoMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
