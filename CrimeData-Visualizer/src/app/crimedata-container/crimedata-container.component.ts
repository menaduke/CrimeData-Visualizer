import { Component, OnInit } from '@angular/core';
import { CrimeData } from '../models/crimedata';
import { CrimeDataService } from '../services/crimedata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crimedata-container',
  templateUrl: './crimedata-container.component.html',
  styleUrls: ['./crimedata-container.component.scss']
})
export class CrimedataContainerComponent implements OnInit {
  randomNumber = Math.random() * this.crimeDataService.crimeData.length;
  randomSeedInital = this.randomNumber < 997 ? this.randomNumber : 997;
  crimeData: CrimeData[] = this.crimeDataService.crimeData.slice(this.randomSeedInital, this.randomSeedInital + 3);
  constructor(
    private crimeDataService: CrimeDataService,
    private router: Router
  ) { }
  ngOnInit(): void {
  }
  routeToOverView() {
    this.router.navigateByUrl(`overview`);
  }
}
