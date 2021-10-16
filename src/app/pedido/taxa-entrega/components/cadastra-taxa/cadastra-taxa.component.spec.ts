import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraTaxaComponent } from './cadastra-taxa.component';

describe('CadastraTaxaComponent', () => {
  let component: CadastraTaxaComponent;
  let fixture: ComponentFixture<CadastraTaxaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraTaxaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraTaxaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
