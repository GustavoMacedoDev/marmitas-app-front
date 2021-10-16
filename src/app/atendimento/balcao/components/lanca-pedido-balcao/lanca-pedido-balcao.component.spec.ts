import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancaPedidoBalcaoComponent } from './lanca-pedido-balcao.component';

describe('LancaPedidoBalcaoComponent', () => {
  let component: LancaPedidoBalcaoComponent;
  let fixture: ComponentFixture<LancaPedidoBalcaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancaPedidoBalcaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancaPedidoBalcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
