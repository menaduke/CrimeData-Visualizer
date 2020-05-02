import { Component, OnInit, Input } from '@angular/core';
import { CrimeData } from 'src/app/models/crimedata';
import * as ncic_codes from '../../../assets/ncic_codes.json';

@Component({
  selector: 'app-crimedata-card',
  templateUrl: './crimedata-card.component.html',
  styleUrls: ['./crimedata-card.component.scss']
})
export class CrimedataCardComponent implements OnInit {
  @Input('crimeData') crimeData: CrimeData;
  ncicCodesDictionary = ncic_codes['default'];
  constructor() { }

  ngOnInit(): void {
    console.log(';crimeData', this.crimeData)
  }

}
