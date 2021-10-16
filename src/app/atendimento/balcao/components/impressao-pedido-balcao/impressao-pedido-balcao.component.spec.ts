import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressaoPedidoBalcaoComponent } from './impressao-pedido-balcao.component';

describe('ImpressaoPedidoBalcaoComponent', () => {
  let component: ImpressaoPedidoBalcaoComponent;
  let fixture: ComponentFixture<ImpressaoPedidoBalcaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressaoPedidoBalcaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressaoPedidoBalcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
