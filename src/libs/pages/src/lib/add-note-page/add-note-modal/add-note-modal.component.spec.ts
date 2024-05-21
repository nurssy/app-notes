import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNoteModalComponent } from './add-note-modal.component';

describe('AddNoteModalComponent', () => {
  let component: AddNoteModalComponent;
  let fixture: ComponentFixture<AddNoteModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNoteModalComponent]
    });
    fixture = TestBed.createComponent(AddNoteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
