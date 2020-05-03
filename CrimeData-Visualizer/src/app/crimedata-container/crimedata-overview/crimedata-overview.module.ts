import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrimedataOverviewComponent } from './crimedata-overview.component';
import { CrimedataChartModule } from './crimedata-chart/crimedata-chart.module';



@NgModule({
  declarations: [
    CrimedataOverviewComponent,
  ],
  exports: [
    CrimedataOverviewComponent
  ],
  imports: [
    CommonModule,
    CrimedataChartModule
  ]
})
export class CrimedataOverviewModule { }
