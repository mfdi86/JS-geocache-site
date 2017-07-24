import { Component, OnInit } from '@angular/core';
import { CacheService } from '../cache.service';
import { Cache } from '../cache.model';
import { Observable } from 'rxjs/Observable';
import { GeolocateService } from '../geolocate.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [CacheService, GeolocateService]
})
export class AddComponent {
  geocaches: any[];
  address: any [] = null;

  constructor(private geolocateService: GeolocateService) { }

  getPhysicalAddress(address: string, creator: string)  {
    this.geolocateService.getCoordinates(address).subscribe(response => {
      this.address = response.json();
    });
  }

  getLatLon(lat: string, lon: string, creator: string) {
    this.geolocateService.getAddress(lat, lon).subscribe(response => {
      this.address = response.json();
    });
  }


  // submitForm(creator: string, address: string, lat: string, lon: string) {
  //   var newCache: Cache = new Cache(creator, address, lat, lon);
  //   this.geolocateService.addCache(newCache);
  // }

}
