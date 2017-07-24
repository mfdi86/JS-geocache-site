import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Cache } from './cache.model';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GeolocateService {

  constructor(private http: Http) { }

  getAddress(lat:string, lon: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lon+"&key="+geoKey);
  }

  getCoordinates(address: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key="+geoKey);
  }
}
