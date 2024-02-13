import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralGridComponent } from './shared/grids/general-grid/general-grid.component';
import { GeneralDialogComponent } from './shared/dialogs/general-dialog/general-dialog.component';
import { EtlDialogComponent } from './shared/dialogs/etl-dialog/etl-dialog.component';
import { ModelDialogComponent } from './shared/dialogs/model-dialog/model-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralGridComponent,
    GeneralDialogComponent,
    EtlDialogComponent,
    ModelDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgGridModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
