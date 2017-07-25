import { Component, OnInit } from '@angular/core';
import { Bucket } from './../bucket';
import { Users } from './../users';
import { BucketlistService } from './../bucketlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-bucket',
  templateUrl: './list-bucket.component.html',
  styleUrls: ['./list-bucket.component.css']
})
export class ListBucketComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
