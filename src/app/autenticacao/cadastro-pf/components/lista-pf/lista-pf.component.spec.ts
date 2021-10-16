import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPfComponent } from './lista-pf.component';

describe('ListaPfComponent', () => {
  let component: ListaPfComponent;
  let fixture: ComponentFixture<ListaPfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
