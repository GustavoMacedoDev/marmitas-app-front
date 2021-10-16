import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CestinhaComponent } from './cestinha.component';

describe('CestinhaComponent', () => {
  let component: CestinhaComponent;
  let fixture: ComponentFixture<CestinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CestinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CestinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
