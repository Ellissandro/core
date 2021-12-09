import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrapicBarComponent } from './components/grapic-bar/grapic-bar.component';
import { RouterModule } from '@angular/router';
import { ChartistModule } from "ng-chartist";


@NgModule({
  declarations: [
    GrapicBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: GrapicBarComponent }]),
    ChartistModule
  ]
})
export class GraphicModule { }
