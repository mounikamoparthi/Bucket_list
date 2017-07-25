import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BucketlistService } from './bucketlist.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { UserBucketComponent } from './user-bucket/user-bucket.component';
import { ListBucketComponent } from './list-bucket/list-bucket.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path:"login", component:LoginComponent },
  { path: "create", component:UserBucketComponent },
  { path: "dashboard", component:ListBucketComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
