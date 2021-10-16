import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLanchesComponent } from './lista-lanches.component';

describe('ListaLanchesComponent', () => {
  let component: ListaLanchesComponent;
  let fixture: ComponentFixture<ListaLanchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLanchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLanchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
