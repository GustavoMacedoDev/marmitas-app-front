import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTaxaComponent } from './lista-taxa.component';

describe('ListaTaxaComponent', () => {
  let component: ListaTaxaComponent;
  let fixture: ComponentFixture<ListaTaxaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTaxaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTaxaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
