import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { Users } from './../users';
import { BucketlistService } from './../bucketlist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 new_user = new Users
  constructor(private _api: BucketlistService, private router: Router) { }
  ngOnInit() {
  }
  login(){
    console.log(this.new_user)
    this._api.login(this.new_user)
      .then(() => {
        this.router.navigate(["/create"]);
      })
      .catch(err => console.log(err))

    this.new_user = new Users
  }

}
