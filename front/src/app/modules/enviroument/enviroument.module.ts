import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EnviroumentComponent } from './enviroument.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [
    EnviroumentComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [EnviroumentComponent]
})
export class EnviroumentModule { }
