import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcaoAtendimentoComponent } from './opcao-atendimento.component';

describe('OpcaoAtendimentoComponent', () => {
  let component: OpcaoAtendimentoComponent;
  let fixture: ComponentFixture<OpcaoAtendimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcaoAtendimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcaoAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
