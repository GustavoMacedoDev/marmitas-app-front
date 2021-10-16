import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMesaConfirmationComponent } from './order-mesa-confirmation.component';

describe('OrderMesaConfirmationComponent', () => {
  let component: OrderMesaConfirmationComponent;
  let fixture: ComponentFixture<OrderMesaConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMesaConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMesaConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
