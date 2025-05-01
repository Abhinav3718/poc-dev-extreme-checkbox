import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxCheckBoxModule, DxDataGridModule } from 'devextreme-angular';
import { DxCheckboxComponentComponent } from './dx-checkbox-component/dx-checkbox-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DxCheckboxComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxCheckBoxModule,
    DxDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
