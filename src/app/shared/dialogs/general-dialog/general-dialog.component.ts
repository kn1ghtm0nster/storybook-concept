import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ComponentFactoryResolver,
  Type,
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { DialogInput } from '../../../interfaces/dialog.interface';

@Component({
  selector: 'app-general-dialog',
  templateUrl: './general-dialog.component.html',
  styleUrls: ['./general-dialog.component.scss'],
})
export class GeneralDialogComponent implements OnInit {
  @Input() dialogInput: DialogInput | null = null;

  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  // contains the component to be rendered dynamically
  dynamicComponent: Type<any> | null = null;

  constructor(
    private dialogRef: MatDialogRef<GeneralDialogComponent>,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.dynamicComponent = this.dialogInput?.component || null;
  }

  onSave(): void {
    this.save.emit();
    this.dialogRef.close();
  }

  onCancel(): void {
    this.cancel.emit();
    this.dialogRef.close();
  }
}
