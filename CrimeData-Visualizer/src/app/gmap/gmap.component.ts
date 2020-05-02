import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  @Input('lat') lat: number // = 40.730610;
  @Input('lng') lng: number // = -73.935242;
  map: google.maps.Map;
  coordinates: google.maps.LatLng;
  mapOptions: google.maps.MapOptions;
  marker: google.maps.Marker;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }
  ngAfterViewInit(): void {
    this.main();
  }

  main() {
    // order is important, coordinates are dependents for functions after
    this.setCoordinates();
    this.setMapOptions();
    this.createMarker();
    this.mapInitializer();
    this.setMarkerOnMap();
  }

  mapInitializer(): void {
    this.map = new google
    .maps
    .Map(this.gmap.nativeElement, this.mapOptions);
  }
  setCoordinates(): void {
    this.coordinates = new google.maps.LatLng(Number(this.lat), Number(this.lng));
  }

  setMapOptions() {
    this.mapOptions = {
      center: this.coordinates,
      zoom: 18,
    };
  }

  createMarker() {
    this.marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
    });
  }

  setMarkerOnMap() {
    this.marker.setMap(this.map);
  }
}
