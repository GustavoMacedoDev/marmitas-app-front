import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPedidosBalcaoComponent } from './lista-pedidos-balcao.component';

describe('ListaPedidosBalcaoComponent', () => {
  let component: ListaPedidosBalcaoComponent;
  let fixture: ComponentFixture<ListaPedidosBalcaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPedidosBalcaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPedidosBalcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
