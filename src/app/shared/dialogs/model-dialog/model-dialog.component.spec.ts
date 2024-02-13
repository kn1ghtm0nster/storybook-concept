import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDialogComponent } from './model-dialog.component';

describe('ModelDialogComponent', () => {
  let component: ModelDialogComponent;
  let fixture: ComponentFixture<ModelDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelDialogComponent]
    });
    fixture = TestBed.createComponent(ModelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
