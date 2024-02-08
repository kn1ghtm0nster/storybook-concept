import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralGridComponent } from './shared/grids/general-grid/general-grid.component';
import { GeneralDialogComponent } from './shared/dialogs/general-dialog/general-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralGridComponent,
    GeneralDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
