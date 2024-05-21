import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDetailsModalComponent } from './note-details-modal.component';

describe('NoteDetailsModalComponent', () => {
  let component: NoteDetailsModalComponent;
  let fixture: ComponentFixture<NoteDetailsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteDetailsModalComponent]
    });
    fixture = TestBed.createComponent(NoteDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
