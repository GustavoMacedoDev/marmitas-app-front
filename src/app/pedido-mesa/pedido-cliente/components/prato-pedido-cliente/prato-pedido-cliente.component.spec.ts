import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoPedidoClienteComponent } from './prato-pedido-cliente.component';

describe('PratoPedidoClienteComponent', () => {
  let component: PratoPedidoClienteComponent;
  let fixture: ComponentFixture<PratoPedidoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratoPedidoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratoPedidoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
