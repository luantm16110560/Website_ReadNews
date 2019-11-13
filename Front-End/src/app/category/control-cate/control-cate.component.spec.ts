import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCateComponent } from './control-cate.component';

describe('ControlCateComponent', () => {
  let component: ControlCateComponent;
  let fixture: ComponentFixture<ControlCateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlCateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
