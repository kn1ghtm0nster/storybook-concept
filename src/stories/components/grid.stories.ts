import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { AgGridModule } from 'ag-grid-angular';
import { MatButtonModule } from '@angular/material/button';

import { GeneralGridComponent } from '../../app/shared/grids/general-grid/general-grid.component';

import { defaultGridConfig } from '../../app/shared/variables/main-grid.variables';

const meta: Meta<GeneralGridComponent<any>> = {
  title: 'Grid Component',
  component: GeneralGridComponent,
  decorators: [
    moduleMetadata({
      declarations: [GeneralGridComponent],
      imports: [AgGridModule, MatButtonModule],
    }),
  ],
  argTypes: {
    gridConfig: {
      control: 'object',
      description: 'The grid configuration object',
    },
  },
};

export default meta;
type Story = StoryObj<GeneralGridComponent<any>>;

export const DefaultGridUseCase: Story = {
  args: {
    gridConfig: {
      ...defaultGridConfig,
      gridOptions: { ...defaultGridConfig.gridOptions },
    },
  },
};

export const EditEtlGridUseCase: Story = {
  args: {
    gridConfig: {
      ...defaultGridConfig,
      gridOptions: { ...defaultGridConfig.gridOptions },
      actions: {
        onEdit: () => {
          action('ETL Dialog Opened');
          console.log('ETL Dialog Opened');
        },
      },
    },
  },
  name: 'Grid with Edit button for ETL Dialog',
};
