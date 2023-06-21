import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PupComponent } from './pup.component';

describe('PupComponent', () => {
  let component: PupComponent;
  let fixture: ComponentFixture<PupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PupComponent]
    });
    fixture = TestBed.createComponent(PupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
