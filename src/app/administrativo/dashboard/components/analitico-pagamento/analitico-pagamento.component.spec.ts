import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliticoPagamentoComponent } from './analitico-pagamento.component';

describe('AnaliticoPagamentoComponent', () => {
  let component: AnaliticoPagamentoComponent;
  let fixture: ComponentFixture<AnaliticoPagamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaliticoPagamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaliticoPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
