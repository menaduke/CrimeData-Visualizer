import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { GmapModule } from './gmap/gmap.module';
import { CrimedataContainerModule } from './crimedata-container/crimedata-container.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // angular modules
    BrowserModule,
    AppRoutingModule,
    // my modules
    HomeModule,
    GmapModule,
    CrimedataContainerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
