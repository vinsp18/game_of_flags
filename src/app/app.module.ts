import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from '@angular/forms';
import { AppComponent } from './app.component';
import { FlagComponent } from './flag/flag.component';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { CountdownModule } from 'ngx-countdown';



@NgModule({
  declarations: [
    AppComponent,
    FlagComponent
  ],
  imports: [
    BrowserModule,FormsModule,CountdownTimerModule.forRoot(),CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
