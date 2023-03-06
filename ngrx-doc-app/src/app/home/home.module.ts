import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';


import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './modules/home-container.component';


@NgModule({
  declarations: [
    HomeContainerComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule
  ]
})
export class HomeModule { }
