import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviousComponent } from './shared/components/previous/previous.component';
import { CurrrentComponent } from './shared/components/currrent/currrent.component';
import { NextComponent } from './shared/components/next/next.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviousComponent,
    CurrrentComponent,
    NextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
