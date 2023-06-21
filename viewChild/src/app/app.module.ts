import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharkDirective } from './shark.directive';
import { PupComponent } from './pup/pup.component';

@NgModule({
  declarations: [
    AppComponent,
    SharkDirective,
    PupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
