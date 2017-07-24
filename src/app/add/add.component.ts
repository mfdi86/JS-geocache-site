import { Component, OnInit } from '@angular/core';
import { CacheService } from '../cache.service';
import { Cache } from '../cache.model';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [CacheService]
})
export class AddComponent implements OnInit {

  constructor(private cacheService: CacheService) { }

  ngOnInit() {
  }

  submitForm(creator: string, address: string, lat: string, lon: string) {
    var newCache: Cache = new Cache(creator, address, lat, lon);
    console.log(newCache);
  }

}
