import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaPfComponent } from './edita-pf.component';

describe('EditaPfComponent', () => {
  let component: EditaPfComponent;
  let fixture: ComponentFixture<EditaPfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaPfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
