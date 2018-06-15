import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page1Component } from './component/page1/page1.component';
import { LoginComponent } from './login/login.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/Router';



@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    LoginComponent,
    DetailPageComponent,
  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    //RouterModule.forRoot()
  ]
  //providers: [],
 // bootstrap: [AppComponent]
})
export class AppModule { }
