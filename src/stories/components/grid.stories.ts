import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { AgGridModule } from 'ag-grid-angular';

import { GeneralGridComponent } from '../../app/shared/grids/general-grid/general-grid.component';

import { defaultGridConfig } from '../../app/shared/variables/main-grid.variables';

const meta: Meta<GeneralGridComponent<any>> = {
  title: 'Grid Component',
  component: GeneralGridComponent,
  decorators: [
    moduleMetadata({
      declarations: [GeneralGridComponent],
      imports: [AgGridModule],
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
