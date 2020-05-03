import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CrimedataContainerComponent } from './crimedata-container/crimedata-container.component';
import { CrimedataDetailsPageComponent } from './crimedata-container/crimedata-details-page/crimedata-details-page.component';
import { CrimedataOverviewComponent } from './crimedata-container/crimedata-overview/crimedata-overview.component';

export const routes: Routes = [
  { path: '', redirectTo: 'map', pathMatch: 'full' },
  { path: 'map', component: CrimedataContainerComponent, pathMatch: 'full' },
  { path: 'overview', component: CrimedataOverviewComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'crimedata-details-page/:id', component: CrimedataDetailsPageComponent },
  { path: '*', redirectTo: ''},
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
