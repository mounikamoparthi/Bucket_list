import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Bucket } from './../bucket';
import { Users } from './../users';
import { BucketlistService } from './../bucketlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-bucket',
  templateUrl: './user-bucket.component.html',
  styleUrls: ['./user-bucket.component.css']
})
export class UserBucketComponent implements OnInit, AfterViewInit {
  newBucket = new Bucket();
  current_user: Users
  currentUserBuckets: Array<Bucket>
  list_users: Array<Users>
  constructor(private _api:BucketlistService, private _router: Router ) { }

  ngOnInit() {
    this.getCurrentUserBuckets();
    this._api.getCurrentUser()
    .then((data) => {
      if(data){
        this.current_user = data
      } else {
        this._router.navigate(["/login"])
      }
    })
  }
  ngAfterViewInit()
   {
    this.getCurrentUserBuckets();
    this.get_all_users();
   }
  addBucket(){
    this.newBucket.user_id = this.current_user._id;
    this._api.createBucket(this.newBucket)
    .then(() =>{
      this.newBucket = new Bucket();
      this.getCurrentUserBuckets()
      this.get_all_users()
    })
    .catch((err) => {console.log(err)});
  }
  getCurrentUserBuckets(){
      this._api.getUserBuckets()
      .then((data) => {
        if(data){
          this.currentUserBuckets = data;
        }
      })
   }
get_all_users(){
  console.log(this.list_users);
    this._api.listUsers()
    .then((data) => {
      if(data){
        this.list_users = data;
      }
    })
    .catch((err) => {console.log(err)});
  }
}
