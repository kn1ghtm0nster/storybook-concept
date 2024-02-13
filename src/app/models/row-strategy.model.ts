import { GridApi } from 'ag-grid-community';

import { RowStrategy } from '../interfaces/row-strategy.interface';

export class GenericRowStrategy<T> implements RowStrategy<T> {
  public addRow(
    gridApi: GridApi,
    rowData: T[],
    orderedGrid?: boolean,
    columns: T[] = []
  ): T[] {
    const newRow = this.createNewRow(columns);
    const updatedRowData = [...rowData, newRow];
    gridApi.setRowData(updatedRowData);
    if (orderedGrid) {
      return this.updateRowOrder(gridApi, updatedRowData);
    }
    return updatedRowData;
  }

  public removeRow(
    gridApi: GridApi<any>,
    rowData: T[],
    rowsToRemove?: T[] | undefined
  ): T[] {
    const transaction = {
      remove: rowsToRemove,
    };

    gridApi.applyTransaction(transaction);

    // if grid uses sequential ordering, update the row order accordingly
    let updatedRows: T[] = [];
    gridApi.forEachNodeAfterFilterAndSort((rowNode, index) => {
      let singleRow = rowNode.data;

      if ('ETL_SEQ_NUM' in singleRow) {
        singleRow.ETL_SEQ_NUM = index + 1;
      }

      updatedRows.push(singleRow);
    });

    gridApi.applyTransaction({ update: updatedRows });
    return updatedRows;
  }

  public updateRowOrder(gridApi: GridApi<any>, rowData: T[]): T[] {
    let updatedRows: T[] = [];

    gridApi.forEachNode((rowNode, index) => {
      let singleRow = rowNode.data;

      // if grid uses sequential ordering, update row order accordingly
      if ('ETL_SEQ_NUM' in singleRow) {
        singleRow.ETL_SEQ_NUM = index + 1;
      }

      updatedRows.push(singleRow);
    });

    return updatedRows;
  }

  private createNewRow(columns: T[]): T {
    const newRow: any = {};
    columns.forEach((column) => {
      newRow[column] = '';
    });
    return newRow;
  }
}
