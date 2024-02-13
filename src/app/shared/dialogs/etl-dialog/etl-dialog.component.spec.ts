import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtlDialogComponent } from './etl-dialog.component';

describe('EtlDialogComponent', () => {
  let component: EtlDialogComponent;
  let fixture: ComponentFixture<EtlDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtlDialogComponent]
    });
    fixture = TestBed.createComponent(EtlDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
