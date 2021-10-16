import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoMesaComponent } from './pagamento-mesa.component';

describe('PagamentoMesaComponent', () => {
  let component: PagamentoMesaComponent;
  let fixture: ComponentFixture<PagamentoMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentoMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
