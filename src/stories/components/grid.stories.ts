import type { Meta, StoryObj } from '@storybook/angular';

import { GeneralGridComponent } from '../../app/shared/grids/general-grid/general-grid.component';

const meta: Meta<GeneralGridComponent> = {
  component: GeneralGridComponent,
};

export default meta;
type Story = StoryObj<GeneralGridComponent>;

export const BaseGeneralGridStory: Story = {
  args: {},
};
