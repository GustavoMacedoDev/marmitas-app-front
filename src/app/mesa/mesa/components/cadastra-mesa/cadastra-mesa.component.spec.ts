import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraMesaComponent } from './cadastra-mesa.component';

describe('CadastraMesaComponent', () => {
  let component: CadastraMesaComponent;
  let fixture: ComponentFixture<CadastraMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
