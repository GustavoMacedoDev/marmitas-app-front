import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEntregaOrderComponent } from './lista-entrega-order.component';

describe('ListaEntregaOrderComponent', () => {
  let component: ListaEntregaOrderComponent;
  let fixture: ComponentFixture<ListaEntregaOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEntregaOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEntregaOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
