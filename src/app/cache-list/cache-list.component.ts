import { Component, OnInit, Input } from '@angular/core';
import { Cache } from '../cache.model';
import { Router } from '@angular/router';
import { CacheService } from '../cache.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-cache-list',
  templateUrl: './cache-list.component.html',
  styleUrls: ['./cache-list.component.css'],
  providers: [CacheService]
})
export class CacheListComponent implements OnInit {
  caches: FirebaseListObservable<any[]>;
  @Input() childAddress;
  constructor(private router: Router, private cacheService: CacheService) {}

  ngOnInit(){
    this.caches = this.cacheService.getCaches();
  }

  goToDetailPage(clickedCache) {
    this.router.navigate(['caches', clickedCache.$key]);
   };
}
