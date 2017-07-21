import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Cache } from '../cache.model';
import { CacheService } from '../cache.service';

@Component({
  selector: 'app-cache-detail',
  templateUrl: './cache-detail.component.html',
  styleUrls: ['./cache-detail.component.css'],
  providers: [CacheService]
})
export class CacheDetailComponent implements OnInit {
  cacheId: number;
  cacheToDisplay: Cache;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cacheService: CacheService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.cacheId = parseInt(urlParameters['id']);
    });
    this.cacheToDisplay = this.cacheService.getCacheById(this.cacheId);
  }

}
