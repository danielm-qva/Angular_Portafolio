import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarAppComponent } from './Component/navbar-app/navbar-app.component';
import { HomeComponent } from './Component/home/home.component';
import { WorkkComponent } from './Component/workk/workk.component';
import { AboutComponent } from './Component/about/about.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    NavbarAppComponent,
    HomeComponent,
    WorkkComponent,
    AboutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
