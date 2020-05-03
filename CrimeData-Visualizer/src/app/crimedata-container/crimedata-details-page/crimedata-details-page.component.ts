import { CrimeDataService } from '../../services/crimedata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-crimedata-details-page',
  templateUrl: './crimedata-details-page.component.html',
  styleUrls: ['./crimedata-details-page.component.scss']
})
export class CrimedataDetailsPageComponent implements OnInit {
  routerIndex: string;
  crimeDataKeys;
  crimeData;
  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    public crimeDataService: CrimeDataService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(route => {
      console.log('route', route);
      if (route && route.id) {
        this.routerIndex = route.id;
        this.setCrimeData();
        this.setCrimeDataKeys();
      }
    });
  }

  setCrimeDataKeys() {
    this.crimeDataKeys = Object.keys(this.crimeData);
  }

  setCrimeData() {
    this.crimeData = this.crimeDataService.crimeData[this.routerIndex];
    console.log('this.crimeData', this.crimeData)
  }

  goBack() {
    this.location.back();
  }

}
