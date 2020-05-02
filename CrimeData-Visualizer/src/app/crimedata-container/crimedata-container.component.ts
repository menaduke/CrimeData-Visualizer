import { Component, OnInit } from '@angular/core';

import * as crimeData from '../../assets/crimedata.json';
import * as ncic_codes from '../../assets/ncic_codes.json';

import { CrimeData } from '../models/crimedata';

@Component({
  selector: 'app-crimedata-container',
  templateUrl: './crimedata-container.component.html',
  styleUrls: ['./crimedata-container.component.scss']
})
export class CrimedataContainerComponent implements OnInit {
  crimeData: CrimeData[] = crimeData['default'].slice(0,3);
  ncicCodesDictionary = ncic_codes['default'];
  constructor() { }
  ngOnInit(): void {
  }

}
