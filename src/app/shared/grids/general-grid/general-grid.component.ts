import { Component, Input, OnInit } from '@angular/core';
import { GridApi, ColumnApi, GridOptions } from 'ag-grid-community';

import { GridConfig } from '../../../interfaces/grid.interface';
import {
  defaultColumns,
  defaultGridConfig,
} from '../../variables/main-grid.variables';

@Component({
  selector: 'app-general-grid',
  templateUrl: './general-grid.component.html',
  styleUrls: ['./general-grid.component.scss'],
})
export class GeneralGridComponent<T> implements OnInit {
  private gridApi: GridApi | null = null;
  private gridColumnApi: ColumnApi | null = null;
  private gridOptions: GridOptions | null = null;

  @Input() set gridConfig(value: GridConfig<T> | null) {
    this._gridConfig = {
      ...defaultGridConfig,
      ...value,
      gridOptions: {
        ...defaultGridConfig.gridOptions,
        columnDefs: value?.gridOptions?.columnDefs || defaultColumns,
      },
      rows: value?.rows || [],
    };
  }

  constructor() {}

  ngOnInit(): void {}

  get gridConfig(): GridConfig<T> | null {
    return this._gridConfig;
  }

  private _gridConfig: GridConfig<T> | null = defaultGridConfig;

  onGridReady(params: any): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.hideOverlay();
  }
}
