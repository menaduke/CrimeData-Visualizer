import { Component, OnInit } from '@angular/core';
import { CrimeDataService } from 'src/app/services/crimedata.service';

@Component({
  selector: 'app-crimedata-overview',
  templateUrl: './crimedata-overview.component.html',
  styleUrls: ['./crimedata-overview.component.scss']
})
export class CrimedataOverviewComponent implements OnInit {
  crimeData = this.crimeDataService.crimeData;
  constructor(
    private crimeDataService: CrimeDataService
  ) { }

  ngOnInit(): void {
  }

}
