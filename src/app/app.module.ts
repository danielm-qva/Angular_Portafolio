import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarAppComponent } from './Component/navbar-app/navbar-app.component';
import { HomeComponent } from './Component/home/home.component';

@NgModule({
  declarations: [AppComponent, NavbarAppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
