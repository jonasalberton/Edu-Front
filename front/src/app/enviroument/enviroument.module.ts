import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EnviroumentComponent } from './enviroument.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    EnviroumentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [EnviroumentComponent]
})
export class EnviroumentModule { }
