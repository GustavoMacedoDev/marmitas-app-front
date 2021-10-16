import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLanchesCategoriaComponent } from './lista-lanches-categoria.component';

describe('ListaLanchesCategoriaComponent', () => {
  let component: ListaLanchesCategoriaComponent;
  let fixture: ComponentFixture<ListaLanchesCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLanchesCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLanchesCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
