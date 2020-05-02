import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrimedataCardComponent } from './crimedata-card.component';
import { GmapModule } from 'src/app/gmap/gmap.module';



@NgModule({
  declarations: [CrimedataCardComponent],
  exports: [CrimedataCardComponent],
  imports: [
    CommonModule,
    GmapModule
  ]
})
export class CrimedataCardModule { }
