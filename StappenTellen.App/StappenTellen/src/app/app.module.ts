import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ResultComponentComponent } from './result-component/result-component.component';
import { StapelTellen } from './stapel-tellen';
import { MessageExampleComponentComponent } from './message-example-component/message-example-component.component';
import { MessageService } from './message-example-component/message-service';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponentComponent,
    MessageExampleComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    StapelTellen,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
