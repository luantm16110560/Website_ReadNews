import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateCateComponent } from './create-update-cate.component';

describe('CreateUpdateCateComponent', () => {
  let component: CreateUpdateCateComponent;
  let fixture: ComponentFixture<CreateUpdateCateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUpdateCateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
