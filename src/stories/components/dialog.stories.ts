import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import {
  MatDialogModule,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AgGridModule } from 'ag-grid-angular';

import { GeneralDialogComponent } from '../../app/shared/dialogs/general-dialog/general-dialog.component';
import { GeneralGridComponent } from '../../app/shared/grids/general-grid/general-grid.component';

const meta: Meta<GeneralDialogComponent> = {
  title: 'General Dialog',
  component: GeneralDialogComponent,
  decorators: [
    moduleMetadata({
      declarations: [GeneralDialogComponent, GeneralGridComponent],
      imports: [MatDialogModule, MatButtonModule, AgGridModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<GeneralDialogComponent>;

export const DialogWithGrid: Story = {
  args: {
    dialogInput: {
      title: 'Dialog with Grid',
      component: GeneralGridComponent,
    },
  },
};
