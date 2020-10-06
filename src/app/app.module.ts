import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from "./material-module.module";
import { ReuseableDialogComponent } from './reuse-material/components/dialog/reuseable-dialog.component';
import { DialogService } from "../app/reuse-material/services/dialog.service";
import { DialogOpenComponent } from './components/dialog-open/dialog-open.component';
@NgModule({
  declarations: [
    AppComponent,
    ReuseableDialogComponent,
    DialogOpenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule
  ],
  providers: [DialogService],
  entryComponents:[ReuseableDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
