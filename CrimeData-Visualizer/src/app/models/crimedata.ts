export interface CrimeData {
  cdatetime: Date;
  address: string;
  district: string | number;
  beat: string;
  grid: number;
  crimedescr: string;
  ucr_ncic_code: number;
  latitude: number;
  longitude: number;
}
