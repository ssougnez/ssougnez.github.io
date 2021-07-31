import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BadgeModule, ButtonModule, IconModule } from '@ssougnez/ngx-ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    IconModule,
    BadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
