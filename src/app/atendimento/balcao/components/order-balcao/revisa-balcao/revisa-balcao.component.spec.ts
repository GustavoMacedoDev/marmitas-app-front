import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisaBalcaoComponent } from './revisa-balcao.component';

describe('RevisaBalcaoComponent', () => {
  let component: RevisaBalcaoComponent;
  let fixture: ComponentFixture<RevisaBalcaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisaBalcaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisaBalcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
