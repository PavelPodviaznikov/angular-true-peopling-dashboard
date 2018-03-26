import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseDialogBtnComponent } from './close-dialog-btn.component';

describe('CloseDialogBtnComponent', () => {
  let component: CloseDialogBtnComponent;
  let fixture: ComponentFixture<CloseDialogBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseDialogBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseDialogBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
