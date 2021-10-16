import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBalcaoComponent } from './order-balcao.component';

describe('OrderBalcaoComponent', () => {
  let component: OrderBalcaoComponent;
  let fixture: ComponentFixture<OrderBalcaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderBalcaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBalcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
