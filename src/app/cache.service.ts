import { Injectable } from '@angular/core';
import { Cache } from './cache.model';
import { CACHES } from './mock-caches';

@Injectable()
export class CacheService {

  constructor() { }

  getCaches() {
    return CACHES;
  }
}
