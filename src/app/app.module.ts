import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ResultComponentComponent } from './result-component/result-component.component';
import { StapelTellen } from './stapel-tellen';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [
    StapelTellen
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
