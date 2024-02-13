import { Component, ComponentFactoryResolver } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { GeneralDialogComponent } from '../general-dialog/general-dialog.component';

@Component({
  selector: 'app-etl-dialog',
  templateUrl: './etl-dialog.component.html',
  styleUrls: ['./etl-dialog.component.scss'],
})
export class EtlDialogComponent extends GeneralDialogComponent {
  constructor(
    dialogRef: MatDialogRef<GeneralDialogComponent>,
    resolver: ComponentFactoryResolver
  ) {
    super(dialogRef, resolver);
  }
}
