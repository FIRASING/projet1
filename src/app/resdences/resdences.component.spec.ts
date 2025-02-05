import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResdencesComponent } from './resdences.component';

describe('ResdencesComponent', () => {
  let component: ResdencesComponent;
  let fixture: ComponentFixture<ResdencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResdencesComponent]
    });
    fixture = TestBed.createComponent(ResdencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
