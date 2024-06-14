import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule, ReactiveFormsModule,
    DragDropModule,
    MatProgressSpinnerModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
