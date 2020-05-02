import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrimedataContainerComponent } from './crimedata-container.component';
import { GmapModule } from '../gmap/gmap.module';
import { CrimedataCardComponent } from './crimedata-card/crimedata-card.component';



@NgModule({
  declarations: [CrimedataContainerComponent, CrimedataCardComponent],
  exports: [CrimedataContainerComponent],
  imports: [
    CommonModule,
    GmapModule
  ]
})
export class CrimedataContainerModule { }
