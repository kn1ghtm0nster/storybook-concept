import { GridApi } from 'ag-grid-community';

export interface RowStrategy<T> {
  addRow(
    gridApi: GridApi,
    rowData: T[],
    orderedGrid?: boolean,
    columns?: T[]
  ): T[];
  removeRow(gridApi: GridApi, rowData: T[], rowsToRemove?: T[]): T[];
  updateRowOrder(gridApi: GridApi, rowData: T[]): T[];
}
