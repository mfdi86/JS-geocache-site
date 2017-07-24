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
export class AddComponent implements OnInit {
  geocaches: any[];
  address: any [] = null;

  constructor(private geolocateService: GeolocateService) { }

  ngOnInit() {
  }

  submitForm(creator: string, address: string, lat: string, lon: string) {
    var newCache: Cache = new Cache(creator, address, lat, lon);
    this.cacheService.addCache(newCache);
  }

}
