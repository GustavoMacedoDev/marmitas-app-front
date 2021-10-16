import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoMesaComponent } from './lancamento-mesa.component';

describe('LancamentoMesaComponent', () => {
  let component: LancamentoMesaComponent;
  let fixture: ComponentFixture<LancamentoMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentoMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentoMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
