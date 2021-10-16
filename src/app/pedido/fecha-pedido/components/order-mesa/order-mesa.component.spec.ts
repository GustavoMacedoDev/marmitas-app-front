import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMesaComponent } from './order-mesa.component';

describe('OrderMesaComponent', () => {
  let component: OrderMesaComponent;
  let fixture: ComponentFixture<OrderMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
