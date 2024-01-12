import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyLibService } from 'my-lib';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [AppComponent,RouterOutlet],
  imports: [BrowserModule, HttpClientModule,HttpClient, RouterModule, FormsModule,RouterOutlet],
  providers: [MyLibService,RouterOutlet],
  bootstrap: [AppComponent,RouterOutlet],
})
export class AppModule
 {}
