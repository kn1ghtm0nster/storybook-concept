import { Component, Injector, NgModule } from '@angular/core';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import {
  MatDialogModule,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { GeneralDialogComponent } from '../../app/shared/dialogs/general-dialog/general-dialog.component';
import { GeneralGridComponent } from '../../app/shared/grids/general-grid/general-grid.component';

@NgModule({
  declarations: [],
  imports: [MatDialogModule, MatButtonModule],
})
class DialogStoryBookModule {}

const meta: Meta<GeneralDialogComponent> = {
  title: 'General Dialog',
  component: GeneralDialogComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [DialogStoryBookModule, MatDialogModule, MatButtonModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
        MatDialog,
      ],
    }),
  ],
  argTypes: {},
};

export default meta;

export const BaseGeneralDialogStory: StoryObj<GeneralDialogComponent> = {
  args: {
    dialogInput: {
      title: 'Dialog Title Here',
      component: GeneralGridComponent,
    },
  },
};
