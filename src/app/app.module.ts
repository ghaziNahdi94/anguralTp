import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LivresModule} from './livres/livres.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import * as $ from 'jquery';
import * as bootstrap from "bootstrap";




@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    LivresModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
