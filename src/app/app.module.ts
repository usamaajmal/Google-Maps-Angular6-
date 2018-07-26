import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxGoogleMapModule } from 'ngx-google-map'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxGoogleMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
