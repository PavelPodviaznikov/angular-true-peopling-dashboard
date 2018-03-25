import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserBtnComponent } from './edit-user-btn.component';

describe('EditUserBtnComponent', () => {
  let component: EditUserBtnComponent;
  let fixture: ComponentFixture<EditUserBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
