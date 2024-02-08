import { ColDef, FirstDataRenderedEvent, GridOptions } from 'ag-grid-community';

import { GridConfig } from '../../interfaces/grid.interface';

const onFirstDataRendered = (params: FirstDataRenderedEvent): void => {
  params.api!.hideOverlay();
  params.api.autoSizeAllColumns(); // prior to v31 -> params.columnApi.autoSizeAllColumns();
};

export const defaultOnGridReady = (params: FirstDataRenderedEvent): void => {
  params.api!.hideOverlay();
};

export const defaultColumnConfiguration: ColDef = {
  sortable: true,
  resizable: true,
  wrapText: true,
  tooltipValueGetter: (params: any): string => {
    return params.value;
  },
};

export const defaultColumns: ColDef[] = [
  {
    rowDrag: true,
    minWidth: 35,
  },
  {
    headerName: '',
    field: 'ckBox',
    maxWidth: 35,
    headerCheckboxSelection: true,
    checkboxSelection: true,
  },
];

export const defaultGridOptions: GridOptions = {
  defaultColDef: defaultColumnConfiguration,
  onFirstDataRendered: onFirstDataRendered,
  cacheQuickFilter: true,
  rowSelection: 'multiple',
  enableBrowserTooltips: true,
  overlayLoadingTemplate:
    '<span class="ag-overlay-loading-center">Please wait while data loads</span>',
  headerHeight: 25,
  rowHeight: 40,
};

export const defaultGridConfig: GridConfig<any> = {
  page: '',
  dialogGrid: false,
  numericOrdering: true,
  gridOptions: defaultGridOptions,
  rows: [],
};
