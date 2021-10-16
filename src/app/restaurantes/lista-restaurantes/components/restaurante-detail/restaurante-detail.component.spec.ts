import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteDetailComponent } from './restaurante-detail.component';

describe('RestauranteDetailComponent', () => {
  let component: RestauranteDetailComponent;
  let fixture: ComponentFixture<RestauranteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
