import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrimedataDetailsPageComponent } from './crimedata-details-page.component';
import { GmapModule } from 'src/app/gmap/gmap.module';



@NgModule({
  declarations: [
    CrimedataDetailsPageComponent
  ],
  exports: [
    CrimedataDetailsPageComponent
  ],
  imports: [
    CommonModule,
    GmapModule
  ]
})
export class CrimedataDetailsPageModule { }
