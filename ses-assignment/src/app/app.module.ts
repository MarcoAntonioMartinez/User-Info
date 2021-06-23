import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SesAssignmentComponent } from './ses-assignment/ses-assignment.component';
import { DisplayDataComponent } from './display-data/display-data.component';

@NgModule({
  declarations: [
    AppComponent,
    SesAssignmentComponent,
    DisplayDataComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
