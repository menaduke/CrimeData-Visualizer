import * as crimeData from '../../assets/crimedata.json';
import * as ncic_codes from '../../assets/ncic_codes.json';
import { CrimeData } from '../models/crimedata';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CrimeDataService {
  ncicCodesDictionary = ncic_codes['default'];

  crimeData: CrimeData[] = crimeData['default']
}
