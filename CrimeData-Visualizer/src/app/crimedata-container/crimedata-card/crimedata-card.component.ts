import { Component, Input, OnInit } from '@angular/core';
import { CrimeData } from 'src/app/models/crimedata';
import { CrimeDataService } from 'src/app/services/crimedata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crimedata-card',
  templateUrl: './crimedata-card.component.html',
  styleUrls: ['./crimedata-card.component.scss']
})
export class CrimedataCardComponent implements OnInit {
  @Input('crimeData') crimeData: CrimeData;
  ncicCodesDictionary = this.crimeDataService.ncicCodesDictionary;
  constructor(private router: Router, public crimeDataService: CrimeDataService ) { }
  ngOnInit(): void {
  }
  routeToDetailsPage(idx: number) {
    this.router.navigateByUrl(`crimedata-details-page/${idx}`);
  }
}
