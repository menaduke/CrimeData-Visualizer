import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrimedataContainerComponent } from './crimedata-container.component';
import { GmapModule } from '../gmap/gmap.module';
import { CrimedataCardComponent } from './crimedata-card/crimedata-card.component';
import { CrimedataDetailsPageComponent } from './crimedata-details-page/crimedata-details-page.component';
import { CrimeDataService } from '../services/crimedata.service';
import { CrimedataDetailsPageModule } from './crimedata-details-page/crimedata-details-page.module';
import { CrimedataCardModule } from './crimedata-card/crimedata-card.module';
import { CrimedataOverviewModule } from './crimedata-overview/crimedata-overview.module';



@NgModule({
  declarations: [
    CrimedataContainerComponent,
  ],
  exports: [
    CrimedataContainerComponent,
    GmapModule,
    CrimedataDetailsPageModule,
    CrimedataCardModule,
    CrimedataOverviewModule
  ],
  imports: [
    CommonModule,
    GmapModule,
    CrimedataDetailsPageModule,
    CrimedataCardModule,
    CrimedataOverviewModule
  ],
  providers: [
    CrimeDataService
  ]
})
export class CrimedataContainerModule { }
