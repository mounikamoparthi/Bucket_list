import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

import "rxjs"
import { Users } from './users';
import { Bucket } from './bucket';

@Injectable()
export class BucketlistService {
  constructor(private http: Http) { }

login(user: Users){
    return this.http.post("/login", user)
    .map(data => data.json()).toPromise()
  }
  logout() {
    return this.http.get('/logout')
    .map(data => data.json()).toPromise();
  }

  getUserBuckets(){
     return this.http.get('/getCurrentBuckets')
    .map(data => data.json()).toPromise();
  }
  getCurrentUser() {
    return this.http.get('/get_logged_in_user')
    .map(data => data.json()).toPromise();
  }
  listUsers(){
    return this.http.get('/list_allUsers')
    .map(data => data.json()).toPromise();
  }

  createBucket(bucket){
    return this.http.post('/createBucket', bucket)
    .map(data => data.json()).toPromise();
  }
}
