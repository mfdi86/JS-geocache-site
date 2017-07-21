import { Injectable } from '@angular/core';
import { Cache } from './cache.model';
import { CACHES } from './mock-caches';

@Injectable()
export class CacheService {

  constructor() { }

  getCaches() {
    return CACHES;
  }
  getCacheById (cacheId: number){
    for (var i = 0; i <= CACHES.length - 1; i++) {
      if (CACHES[i].id === cacheId) {
        return CACHES[i];
      }
    }
  }
}
