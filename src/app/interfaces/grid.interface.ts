import { GridOptions } from 'ag-grid-community';

export enum GridToolBar {
  TopRow = 'showTopRow',
  BottomRow = 'showBottomRow',
  DocsLink = 'showDocsLink',
}

export interface GridConfig<T> {
  page: string;
  dialogGrid: boolean;
  numericOrdering: boolean;
  gridOptions: GridOptions;
  rows: T[];
  mode?: {
    view?: boolean;
    edit?: boolean;
    new?: boolean;
  };
}
