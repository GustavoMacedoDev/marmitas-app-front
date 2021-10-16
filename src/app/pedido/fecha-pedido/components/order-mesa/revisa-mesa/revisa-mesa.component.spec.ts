import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisaMesaComponent } from './revisa-mesa.component';

describe('RevisaMesaComponent', () => {
  let component: RevisaMesaComponent;
  let fixture: ComponentFixture<RevisaMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisaMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisaMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
