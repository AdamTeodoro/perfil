import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutRoutingModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers:[
    HttpClient
  ]
})
export class AboutModule { }
