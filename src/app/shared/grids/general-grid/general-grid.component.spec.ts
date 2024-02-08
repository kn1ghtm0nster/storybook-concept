import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralGridComponent } from './general-grid.component';

describe('GeneralGridComponent', () => {
  let component: GeneralGridComponent;
  let fixture: ComponentFixture<GeneralGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralGridComponent]
    });
    fixture = TestBed.createComponent(GeneralGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
