import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmapComponent } from './gmap.component';



@NgModule({
  declarations: [
    GmapComponent
  ],
  exports: [
    GmapComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GmapModule { }
