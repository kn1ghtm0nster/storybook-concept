export interface GridEventObject<T> {
  gridLocation?: {
    firstPage?: boolean;
    secondPage?: boolean;
    dialog?: boolean;
  };
  type: {
    selectedInput?: string;
    add?: boolean;
    update?: boolean;
    remove?: boolean;
  };
  singleRow?: T;
  rowsSelected?: T[];
  updatedRowData?: T[];
}
