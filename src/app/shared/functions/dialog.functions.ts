import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Type } from '@angular/core';

/**
 * This function opens a new dialog box on the screen. It returns an `Observable` that lets us know when the dialog box is closed.
 *
 * @param dialog {MatDialog} - This is the thing that can open dialog boxes.
 * @param dialogComponent {Type<T>} - This is what we want to show inside the dialog box.
 * @param data {any} - This is the information we want to use in the dialog box.
 *
 * @returns An `Observable` that lets us know when the dialog box is closed.
 */
export function openDynamicDialog<T>(
  dialog: MatDialog,
  dialogComponent: Type<T>,
  data: any
): Observable<any> {
  const config = new MatDialogConfig();

  // setting the configuration for the dialog
  config.height = '90%';
  config.width = '90%';
  config.maxHeight = '90vh';
  config.maxWidth = '90vw';
  config.disableClose = true;

  // data object needed to render data within dialog template
  config.data = data;

  const dialogRef = dialog.open(dialogComponent, config);
  return dialogRef.afterClosed();
}
