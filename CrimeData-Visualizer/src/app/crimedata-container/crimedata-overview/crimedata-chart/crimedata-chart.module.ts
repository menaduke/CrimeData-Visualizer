import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrimedataChartComponent } from './crimedata-chart.component';



@NgModule({
  declarations: [
    CrimedataChartComponent
  ],
  exports: [CrimedataChartComponent],
  imports: [
    CommonModule
  ]
})
export class CrimedataChartModule { }
