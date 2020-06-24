import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutRoutingModule,
    HttpClientModule
  ],
  providers:[
    HttpClient
  ]
})
export class AboutModule { }
