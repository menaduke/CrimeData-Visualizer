import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrimedataCardComponent } from './crimedata-card.component';
import { GmapModule } from 'src/app/gmap/gmap.module';
import { CrimedataDetailsPageModule } from '../crimedata-details-page/crimedata-details-page.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CrimedataCardComponent],
  exports: [CrimedataCardComponent],
  imports: [
    CommonModule,
    GmapModule,
    CrimedataDetailsPageModule,
    RouterModule
  ]
})
export class CrimedataCardModule { }
