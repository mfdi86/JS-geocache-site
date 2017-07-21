import { Component } from '@angular/core';
import { Cache } from '../cache.model';
import { Router } from '@angular/router';
import { CacheService } from '../cache.service';

@Component({
  selector: 'app-cache-list',
  templateUrl: './cache-list.component.html',
  styleUrls: ['./cache-list.component.css']
})
export class CacheListComponent {
  caches: Cache[];
  constructor(private router: Router) {}

  goToDetailPage(clickedCache: Cache) {
     this.router.navigate(['caches', clickedCache.id]);
   };
}
