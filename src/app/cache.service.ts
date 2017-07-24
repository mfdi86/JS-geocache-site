import { Injectable } from '@angular/core';
import { Cache } from './cache.model';
// import { CACHES } from './mock-caches';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CacheService {
  caches: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.caches = database.list('caches');
}

  getCaches() {
    return this.caches;
  }

  addCache(newCache: Cache) {
    this.caches.push(newCache)
  }

  getCacheById(cacheId: string){
    return this.database.object('caches/' + cacheId);
  }
}
