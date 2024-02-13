import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ComponentFactoryResolver,
  Type,
  ViewContainerRef,
  AfterViewInit,
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { DialogInput } from '../../../interfaces/dialog.interface';
import { GridConfig } from 'src/app/interfaces/grid.interface';
import { defaultGridConfig } from '../../variables/main-grid.variables';

@Component({
  selector: 'app-general-dialog',
  templateUrl: './general-dialog.component.html',
  styleUrls: ['./general-dialog.component.scss'],
})
export class GeneralDialogComponent implements OnInit, AfterViewInit {
  @Input() dialogInput: DialogInput | null = null;

  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  @ViewChild('dialogContent', { read: ViewContainerRef })
  dialogContentContainer!: ViewContainerRef;

  gridConfigurationObject: GridConfig<any> | null = null;

  // contains the component to be rendered dynamically
  dynamicComponent: Type<any> | null = null;

  constructor(
    private dialogRef: MatDialogRef<GeneralDialogComponent>,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.dialogInput && this.dialogInput?.component) {
        this.loadDynamicComponent(this.dialogInput?.component);
      }
    });
  }

  public loadDynamicComponent(component: Type<any>): void {
    const componentFactory = this.resolver.resolveComponentFactory(component);

    this.dialogContentContainer.clear();
    const componentRef =
      this.dialogContentContainer.createComponent(componentFactory);

    if (this.gridConfigurationObject) {
      componentRef.instance.gridConfig = this.gridConfigurationObject;
    } else {
      componentRef.instance.gridConfig = defaultGridConfig;
    }
  }

  public onSave(): void {
    this.save.emit();
    this.dialogRef.close();
  }

  public onCancel(): void {
    this.cancel.emit();
    this.dialogRef.close();
  }
}
