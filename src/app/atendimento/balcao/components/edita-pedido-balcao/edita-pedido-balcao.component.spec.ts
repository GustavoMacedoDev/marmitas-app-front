import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaPedidoBalcaoComponent } from './edita-pedido-balcao.component';

describe('EditaPedidoBalcaoComponent', () => {
  let component: EditaPedidoBalcaoComponent;
  let fixture: ComponentFixture<EditaPedidoBalcaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaPedidoBalcaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaPedidoBalcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
