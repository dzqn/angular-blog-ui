import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CagetorylistComponent } from './cagetorylist.component';

describe('CagetorylistComponent', () => {
  let component: CagetorylistComponent;
  let fixture: ComponentFixture<CagetorylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CagetorylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CagetorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
