import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Cache } from '../cache.model';

@Component({
  selector: 'app-cache-detail',
  templateUrl: './cache-detail.component.html',
  styleUrls: ['./cache-detail.component.css']
})
export class CacheDetailComponent implements OnInit {
  cacheId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.cacheId = parseInt(urlParameters['id']);
    });
  }

}
